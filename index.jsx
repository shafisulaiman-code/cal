import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";

export default function MorningCalibrationGuide() {
  const [waterFlow, setWaterFlow] = useState(60);
  const [groupHeadsSeasoned, setGroupHeadsSeasoned] = useState(false);
  const [dose, setDose] = useState(20);
  const [yieldGrams, setYieldGrams] = useState(24);
  const [time, setTime] = useState(25);
  const [taste, setTaste] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Morning Calibration Guide ☕</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 1: Calibrate Water Flow</h2>
        <p className="mb-2">Use the Acaia Pearl to measure 60g in 30 seconds. Adjust Slayer needle valve if needed.</p>
        <Slider min={40} max={80} step={1} value={[waterFlow]} onValueChange={([v]) => setWaterFlow(v)} />
        <p className="mt-2">Measured flow: {waterFlow}g</p>
        {waterFlow >= 58 && waterFlow <= 62 ? (
          <p className="text-green-600">✅ Flow rate is within range!</p>
        ) : (
          <p className="text-yellow-600">⚠️ Adjust valve. Aim for 60g ±2g in 30s.</p>
        )}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 2: Season Group Heads</h2>
        <p className="mb-2">Pull one shot on each group head. This warms up the system and seasons the grinder.</p>
        <Button onClick={() => setGroupHeadsSeasoned(true)}>Mark as Done</Button>
        {groupHeadsSeasoned && <p className="text-green-600 mt-2">✅ Group heads seasoned</p>}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 3: Dial in Espresso</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Dose (g)</label>
            <Input type="number" value={dose} onChange={(e) => setDose(Number(e.target.value))} />
          </div>
          <div>
            <label>Yield (g)</label>
            <Input type="number" value={yieldGrams} onChange={(e) => setYieldGrams(Number(e.target.value))} />
          </div>
          <div>
            <label>Shot Time (s)</label>
            <Input type="number" value={time} onChange={(e) => setTime(Number(e.target.value))} />
          </div>
        </div>
        <p className="mt-2">
          {dose >= 19.5 && dose <= 20.5 && yieldGrams >= 22 && yieldGrams <= 26 && time === 25
            ? "✅ Recipe looks great!"
            : "⚠️ Adjust grind or dose to match target recipe."}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 4: Taste Check</h2>
        <label>How does it taste?</label>
        <select
          className="w-full border rounded p-2"
          value={taste}
          onChange={(e) => setTaste(e.target.value)}
        >
          <option value="">Select</option>
          <option value="sour">Sour or sharp</option>
          <option value="bitter">Bitter or dry</option>
          <option value="hollow">Hollow or weak</option>
          <option value="balanced">Sweet and balanced ✅</option>
        </select>
        <p className="mt-2">
          {taste === "sour" && "→ Grind finer"}
          {taste === "bitter" && "→ Grind coarser"}
          {taste === "hollow" && "→ Increase dose slightly"}
          {taste === "balanced" && "Great job! You're dialed in."}
        </p>
        <Textarea className="mt-4" placeholder="Any notes?" value={notes} onChange={(e) => setNotes(e.target.value)} />
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Final Step</h2>
        <p>Submit your calibration log for today.</p>
        <Button className="mt-2" onClick={handleSubmit}>Submit ✅</Button>
        {submitted && <p className="text-green-600 mt-2">🎉 Calibration complete. Serve with confidence!</p>}
      </section>
    </div>
  );
}