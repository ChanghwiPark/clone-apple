import "./SectionNewIphone13.css";
import SectionWhyIphone13Item from "./SectionWhyIphone13Item";

function SectionNewIphone13() {
    return(
        <section className="o-containerSectionFullIphone13">

            <SectionWhyIphone13Item className="-upgrade" title=" Upgrading from a previous iPhone?" description="Simply put your old iPhone next to your new one, and with a few taps, you can transfer your data automatically. If you need it, you can even get temporary iCloud storage for free to hold everything during the transfer." />
            <SectionWhyIphone13Item className="-switch" title=" Switching from an Android phone?" description="When you buy a new iPhone, there’s a walk‑through to get you started, and the Move to iOS app makes it easy to transfer your photos, contacts, and more." more="Learn more >"/>

        </section>
    );
}

export default SectionNewIphone13;