import { useState } from 'react';

export default function Home() {
  const [waterFlow, setWaterFlow] = useState(60);
  const [groupHeadsSeasoned, setGroupHeadsSeasoned] = useState(false);
  const [dose, setDose] = useState(20);
  const [yieldGrams, setYieldGrams] = useState(24);
  const [time, setTime] = useState(25);
  const [taste, setTaste] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Morning Calibration Guide ☕</h1>

      <h2>Step 1: Calibrate Water Flow</h2>
      <p>Use the Acaia Pearl to measure 60g in 30 seconds.</p>
      <input type="range" min="40" max="80" value={waterFlow} onChange={e => setWaterFlow(Number(e.target.value))} />
      <p>Measured flow: {waterFlow}g</p>
      <p>{waterFlow >= 58 && waterFlow <= 62 ? '✅ Flow rate is within range!' : '⚠️ Adjust needle valve to reach 60g ±2g.'}</p>

      <h2>Step 2: Season Group Heads</h2>
      <button onClick={() => setGroupHeadsSeasoned(true)}>Mark as Done</button>
      {groupHeadsSeasoned && <p>✅ Group heads seasoned</p>}

      <h2>Step 3: Dial in Espresso</h2>
      <label>Dose (g): <input type="number" value={dose} onChange={e => setDose(Number(e.target.value))} /></label><br />
      <label>Yield (g): <input type="number" value={yieldGrams} onChange={e => setYieldGrams(Number(e.target.value))} /></label><br />
      <label>Shot Time (s): <input type="number" value={time} onChange={e => setTime(Number(e.target.value))} /></label>
      <p>{dose >= 19.5 && dose <= 20.5 && yieldGrams >= 22 && yieldGrams <= 26 && time === 25 ? '✅ Recipe looks great!' : '⚠️ Adjust grind or dose.'}</p>

      <h2>Step 4: Taste Check</h2>
      <select value={taste} onChange={e => setTaste(e.target.value)}>
        <option value=''>Select</option>
        <option value='sour'>Sour or sharp</option>
        <option value='bitter'>Bitter or dry</option>
        <option value='hollow'>Hollow or weak</option>
        <option value='balanced'>Sweet and balanced ✅</option>
      </select>
      <p>
        {taste === 'sour' && '→ Grind finer'}
        {taste === 'bitter' && '→ Grind coarser'}
        {taste === 'hollow' && '→ Increase dose slightly'}
        {taste === 'balanced' && 'Great job! You're dialed in.'}
      </p>
      <textarea placeholder='Any notes?' value={notes} onChange={e => setNotes(e.target.value)} style={{ width: '100%', height: '80px' }} />

      <h2>Final Step</h2>
      <button onClick={handleSubmit}>Submit ✅</button>
      {submitted && <p>🎉 Calibration complete. Serve with confidence!</p>}
    </div>
  );
}