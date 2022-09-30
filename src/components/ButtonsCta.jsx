import "./ButtonsCta.css"
import { Link } from 'react-router-dom'

export default function ButtonsCta({ className, arrayButtons=[
    { className: '-learnMore', content: 'Learn more >', href: '/iphone13'},
    { className: '-buy', content: 'Buy >', href: '/buy-iphone13' }
] 
}) {
    return (
        <div className={"m-containerCtaButton  " + className}>
            {
                arrayButtons.map((item) => {
                    console.log(item.href)
                    return (
                        <Link 
                            to={
                                item.href || '/'
                            }
                            // need fixing
                            className={"a-containerCtaButton__button " + className + ' ' + item.className}
                        >
                            {item.content}
                        </Link>
                    )
                })
            }
        </div>
    )
}



