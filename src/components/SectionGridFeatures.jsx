import "./SectionGridFeatures.css";
import SectionGridFeaturesItem from "./SectionGridFeaturesItem";

function SectionGridFeatures() {
    return (
        <section className="o-sectionGridFeatures -iphone13">
            <SectionGridFeaturesItem sectionGridItemArray={[
                { 
                    className: "-battery", 
                    content: "A huge leap in battery life." 
                },
                {
                    className: "-chip", 
                    content: <>
                        A15 Bionic.<br />
                        A lightning-fast chip.
                    </>, 
                    background: <video autoplay loop muted>
                        <source src="https://www.apple.com/105/media/us/iphone-13/key-features/2022/3d78a425-2857-4274-ab4c-cdc7876385f9/anim/A15/large_2x.mp4" type="video/mp4" />
                    </video>
                },
                { 
                    className: "-waterResistance", content: "Chill if you spill." 
                },
                {
                    className: "-dropProtection", content: "Don’t freak over a fumble.", 
                    background: <video autoplay loop muted>
                        <source src="https://www.apple.com/105/media/us/iphone-13/key-features/2022/3d78a425-2857-4274-ab4c-cdc7876385f9/anim/durability/large_2x.mp4" type="video/mp4" />
                    </video>
                },
                {
                    className: "-dualCamera", content: <>A new dual-camera system,<br />
                        for photos worth a double take.</>, 
                    background: <img src="https://www.apple.com/v/iphone-13/h/images/key-features/features/dual_camera_endframe__fv4v25dmdoii_large.jpg" alt="iPhone 13 Camera" />
                },
                {
                    className: "-cinematicMode", content: <>Cinematic mode.<br />
                        The new star of your videos.</>
                },
                { 
                    className: "-fiveG", 
                    content: "5G." 
                },
                { 
                    className: "-trueDepth", content: "A front camera that doesn’t take a back seat." 
                },
                { 
                    className: "-display", 
                    content: "Beauty is screen deep.",
                    background: <img src="https://www.apple.com/v/iphone-13/h/images/key-features/features/oled__dpdkoivadlkm_large_2x.jpg" alt="iPhone 13 Camera" />
                },
                { 
                    className: "-ios15", 
                    content: "iOS 15. New ways to stay in the moment." 
                },
            ]} />

        </section>
    );
}

export default SectionGridFeatures;