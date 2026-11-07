---
name: viva
description: Conducts an interactive academic viva examination from uploaded syllabus notes or textbooks. Asks 5 rigorous questions one by one, evaluates student answers with examiner commentary, awards a score out of 5, and points to exact pages requiring revision.
---

# Viva Examiner Skill (`/viva`)

Use this skill whenever a student provides study notes or asks to be tested via viva examination using `/viva <file>`.

## Operational Protocol
1. **Intake & Analysis**: Read the provided notes and extract 5 conceptual questions spanning foundational principles, counter-examples, and formulas.
2. **One Question at a Time**:
   - Ask Question 1 first.
   - Wait for the user's response before revealing Question 2.
   - Never dump multiple questions simultaneously.
3. **Examiner Feedback**:
   - Critically evaluate the user's response.
   - If partially correct, acknowledge the valid part and demand clarification on the missing mechanism (e.g., *"Partly. Friction lowers real engines, but what about an ideal one?"*).
4. **Final Scoring & Diagnostic**:
   - After 5 questions, calculate the final score (e.g. `Score: 4/5`).
   - Identify weak concept areas and output exact revision recommendations (e.g. `Revise page 14: Carnot efficiency limit`).

## Without Skill vs With Skill Comparison
| Metric | Without `/viva` Skill | With `/viva` Skill |
| :--- | :--- | :--- |
| **Pacing** | Dumps 10 questions at once; overwhelming | Strict 1-by-1 interactive examination pacing |
| **Examiner Feedback** | Generic "Good job" | Strict professor critique pointing out conceptual loopholes |
| **Actionable Outcome** | Vague suggestions | Exact page-referenced revision prescription |
