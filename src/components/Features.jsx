export default function Features() {
  const items = [
    { title: 'Smart Scheduling', desc: 'AI analyzes your habits to create personalized study plans.' },
    { title: 'Progress Tracking', desc: 'Visual dashboards and weekly summaries for motivation.' },
    { title: 'AI Chat Tutor', desc: 'Get instant answers and learning recommendations from AI.' },
  ];

  return (
    <section id="features" className="py-16 bg-gray-100">
      <h3 className="text-3xl font-bold text-center mb-10">App Features</h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {items.map((f, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}