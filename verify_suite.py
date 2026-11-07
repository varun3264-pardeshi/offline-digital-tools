"""
Comprehensive Security, Authentication, Multi-Color UI & Functional Verification Suite
Tests Master Hub + All 17 Individual Project Folders
"""
import os
import re
import glob

def run_verification():
    errors = []
    passed_checks = 0

    # 1. Verify Shared Security & Multi-Color Assets
    for asset in ["assets/studio-ui.css", "assets/security-auth.js", "index.html"]:
        if not os.path.exists(asset):
            errors.append(f"Missing core file: {asset}")
        else:
            passed_checks += 1

    sec_js = open("assets/security-auth.js", encoding="utf-8").read()
    for feature in ["sha256Hex", "sanitizeText", "lockoutUntil", "DEFAULT_PIN_HASH", "openSecurityAuditModal", "applyPalette"]:
        if feature not in sec_js:
            errors.append(f"Missing security/auth feature in security-auth.js: {feature}")
        else:
            passed_checks += 1

    # 2. Verify Master Hub (index.html)
    hub_html = open("index.html", encoding="utf-8").read()
    if any(b in hub_html.lower() for b in ["#070913", "#07090e", "#00f2fe", "#4facfe", "#38bdf8"]):
        errors.append("Master index.html still contains old dark-blue/cyan vibe-coding colors!")
    else:
        passed_checks += 1

    # 3. Verify All 17 Project Folders
    project_dirs = sorted([d for d in glob.glob("project-*") if os.path.isdir(d)])
    if len(project_dirs) != 17:
        errors.append(f"Expected 17 project folders, found {len(project_dirs)}")
    else:
        passed_checks += 1

    for folder in project_dirs:
        html_path = os.path.join(folder, "index.html")
        prompts_path = os.path.join(folder, "prompts.md")
        readme_path = os.path.join(folder, "README.md")

        for req_file in [html_path, prompts_path, readme_path]:
            if not os.path.exists(req_file):
                errors.append(f"Missing {req_file}")
            else:
                passed_checks += 1

        html = open(html_path, encoding="utf-8").read()

        # Check multi-color palette attribute
        if not re.search(r'<html[^>]+data-palette="(terracotta|emerald|mulberry|amber|coral|espresso)"', html):
            errors.append(f"{folder}: Missing non-blue data-palette on <html>")
        else:
            passed_checks += 1

        # Check no leftover dark-blue/cyan hexes
        for banned in ["#070913", "#07090e", "#00f2fe", "#4facfe", "#38bdf8"]:
            if banned in html.lower():
                errors.append(f"{folder}: Found banned blue/navy token {banned}")
        passed_checks += 1

        # Check CSP header + Security Auth script + Simple Functional Heading Banner
        for token in [
            'http-equiv="Content-Security-Policy"',
            '../assets/studio-ui.css',
            '../assets/security-auth.js',
            'class="project-purpose-banner"',
            'class="purpose-heading"',
            '__verifyProjectHash',
            '__exportAuditReport'
        ]:
            if token not in html:
                errors.append(f"{folder}: Missing required UI/Security token {token}")
            else:
                passed_checks += 1

        # Check prompts.md has Phase 5 entry
        ptxt = open(prompts_path, encoding="utf-8").read()
        if "Phase 5:" not in ptxt:
            errors.append(f"{folder}: prompts.md missing Phase 5 entry")
        else:
            passed_checks += 1

    # 4. Check Project 17 Before vs After Identical Text Copy
    def extract_visible_lines(p):
        raw = open(p, encoding="utf-8").read()
        raw = re.sub(r"<head>.*?</head>", "", raw, flags=re.DOTALL)
        raw = re.sub(r"<style>.*?</style>", "", raw, flags=re.DOTALL)
        raw = re.sub(r"<script>.*?</script>", "", raw, flags=re.DOTALL)
        raw = re.sub(r"<[^>]+>", "\n", raw)
        return [line.strip() for line in raw.splitlines() if line.strip()]

    b_lines = extract_visible_lines("project-17-same-page-new-design/before.html")
    a_lines = extract_visible_lines("project-17-same-page-new-design/after.html")
    if b_lines != a_lines:
        errors.append(f"Project 17 before.html and after.html text copy mismatch! {b_lines} vs {a_lines}")
    else:
        passed_checks += 1

    print("=" * 72)
    print(f"SECURITY, AUTHENTICATION, MULTI-COLOR UI & FUNCTIONAL TEST REPORT")
    print("=" * 72)
    print(f"Total Automated Assertions Passed: {passed_checks}")
    print(f"Total Errors Found:                {len(errors)}")
    if errors:
        for e in errors:
            print(" [FAIL]", e)
        raise SystemExit(1)
    else:
        print(" [PASS] All 17 Projects + Master Hub verified 100% (Zero Errors)!")
        print("=" * 72)

if __name__ == "__main__":
    run_verification()
