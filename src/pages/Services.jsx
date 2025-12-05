export default function Services() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Nos services</h2>

      <ul className="space-y-4">
        <li className="p-4 rounded bg-gray-100 dark:bg-gray-800">
          <h3 className="text-xl font-semibold">Développement Web</h3>
          <p>Sites web modernes, SPA, optimisation performance.</p>
        </li>

        <li className="p-4 rounded bg-gray-100 dark:bg-gray-800">
          <h3 className="text-xl font-semibold">Solutions IA & NLP</h3>
          <p>Chatbots, analyse sémantique, IA générative.</p>
        </li>

        <li className="p-4 rounded bg-gray-100 dark:bg-gray-800">
          <h3 className="text-xl font-semibold">Data & Automatisation</h3>
          <p>Automatisation métier, pipelines data, intégrations API.</p>
        </li>
      </ul>
    </div>
  );
}
