import { businessData } from '../data/businessData.js'

function TrustBar() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-5 sm:px-6 md:grid-cols-5 lg:px-8">
        {businessData.trustItems.map((item) => (
          <div key={item.label} className="rounded-2xl bg-stone-50 p-4">
            <p className="text-lg font-extrabold text-slate-950">{item.value}</p>
            <p className="mt-1 text-sm font-semibold text-slate-500">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
