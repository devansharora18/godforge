/**
 * The page's one band of full light. In dark mode it is bone on the
 * umber ground; in light mode it is the dark ground itself.
 * It is the only place ink reverses.
 */
export function Band() {
  return (
    <section className="bg-band text-band-fg">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8">
        <p className="max-w-[26ch] font-display text-[clamp(1.75rem,4vw,3.25rem)] font-semibold leading-[1.1]">
          You can read every file before your agent does.
        </p>
      </div>
    </section>
  )
}
