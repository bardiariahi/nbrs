import { SEO_FAQ } from "@/constance/constance"

const FAQ = () => {
  return (
    <div className="pt-10">
       {
        SEO_FAQ.map( (item:any) => {
            return <div key={item.id} className="collapse collapse-arrow bg-gray-200 dark:bg-gray-700 my-1">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-bold">
              {item.title}
            </div>
            <div className="collapse-content">
             { item.answer &&  <p>
                {item.answer}
              </p> }
              {
                item.other && <p>
                    {item.other}
                </p>
              }
            </div>
          </div>
        } )
       }
    </div>
  )
}

export default FAQ