import "./SectionFooterNotes.css"

export default function SectionFooterNotes({ footerNotesArray }){

  return (
    <section class="m-sectionFooterNotes">
      <ul>
        {
          footerNotesArray && footerNotesArray.map((item) => (
            <li>{item}</li>
          ))
        }
      </ul>
    </section>
  )
}