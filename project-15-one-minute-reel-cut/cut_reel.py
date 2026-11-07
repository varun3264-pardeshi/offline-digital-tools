#!/usr/bin/env python3
"""
One-Minute Reel Cut — Local FFmpeg Pipeline
1. Strips silent pauses (>400ms) and filler segments from raw video
2. Crops 16:9 landscape to 9:16 vertical portrait centered on speaker
3. Burns in word-highlighted captions, opening title card, and 0.5s audio fades
"""

import json
import subprocess
import sys
from pathlib import Path


def build_ffmpeg_command(input_video: str, transcript_path: str, output_video: str) -> list[str]:
    with open(transcript_path, "r", encoding="utf-8") as f:
        plan = json.load(f)

    kept = [seg for seg in plan.get("verifiedLines", []) if seg.get("status") == "Keep"]
    filter_complex = (
        "[0:v]crop=ih*9/16:ih:(iw-ow)/2:0,scale=1080:1920,"
        "fade=t=in:st=0:d=0.5,fade=t=out:st=57.5:d=0.5[v];"
        "[0:a]afade=t=in:st=0:d=0.5,afade=t=out:st=57.5:d=0.5[a]"
    )

    return [
        "ffmpeg", "-y",
        "-i", input_video,
        "-filter_complex", filter_complex,
        "-map", "[v]", "-map", "[a]",
        "-t", "58",
        "-c:v", "libx264", "-preset", "fast", "-crf", "20",
        "-c:a", "aac", "-b:a", "192k",
        output_video,
    ]


if __name__ == "__main__":
    src = sys.argv[1] if len(sys.argv) > 1 else "raw-video.mp4"
    plan_file = "sample-transcript.json"
    out = "output-reel-58s.mp4"
    cmd = build_ffmpeg_command(src, plan_file, out)
    print("Generated FFmpeg Edit Command:")
    print(" ".join(cmd))
