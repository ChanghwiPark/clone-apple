import './BlockH4.css'
import ButtonsCta from "./ButtonsCta";

export default function BlockH4({ className, icon, title, description, cta}) {
    return(
        <section className={"m-blockH4 " + className}>
            <div className={"m-containerBlockH4 " + className}>
                <figure className={"a-blockH4__icon " + className}>{icon}</figure>
                <h4 className={"a-blockH4__title " + className}>{title}</h4>
                <p className={"a-blockH4__description " + className}>{description}</p>
                <ButtonsCta className={'-blockH4 ' + className} arrayButtons={cta}/>
            </div>
        </section>
    );
}