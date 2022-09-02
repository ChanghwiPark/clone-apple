import "./SectionWhyIphone13.css"
import SectionWhyIphone13Item from "./SectionWhyIphone13Item.jsx"

function SectionWhyIphone13() {
    return(
        <section className="o-sectionWhyIphone13">
            <h3 className="a-sectionTitle -whyIphone13">There’s no phone like iPhone.</h3>
            <div className="m-containerWhyIphone13Items">
                <SectionWhyIphone13Item
                    className="-privacy"
                    title="Privacy is built in."
                    description="iPhone helps put you in control of your personal information. For example, when you’re browsing, Safari intelligently helps block trackers from profiling you and shows you which ones have been blocked in your Privacy Report. And the list goes on."
                    more="Learn more about Apple and privacy >"
                />
                <SectionWhyIphone13Item
                    className="-functionality"
                    title="Everything just works."
                    description="Our hardware and software work together seamlessly. Want to pair new AirPods with your iPhone? It’s a simple one‑tap setup. See a phone number in a photo? Live Text lets you tap it to make the call. You can also copy text, send an email, or look up directions right from the photo."
                    more=""
                />
                <SectionWhyIphone13Item
                    className="-durability"
                    title="Designed to last."
                    description="Superstrong materials and water resistance make iPhone incredibly durable. And automatic iOS updates deliver new features and security enhancements that keep your iPhone running beautifully and help it hold its value longer than other smartphones."
                    more=""
                />
                <SectionWhyIphone13Item
                    className="-environment"
                    title="Lighter on the planet."
                    description="Our stores, offices, data centers, and operations are already carbon neutral. By 2030 our products — and your carbon footprint from using them — will be, too. And this year we eliminated the plastic wrap around the iPhone 13 and iPhone 13 Pro boxes, saving 600 metric tons of plastic."
                    more="Learn more about Apple and the environment >"
                />
            </div>

        </section>
    );
}

export default SectionWhyIphone13;