import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { ProductDetails } from "../components/Product"
import { Main } from "../components/Main"

const dummyData = {
  description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, eius suscipit sunt iusto vitae architecto reiciendis magni maiores saepe, reprehenderit id distinctio dolorum est! Quos natus accusantium eius fuga velit.
  Excepturi facilis sit, incidunt minus tempora saepe praesentium ab ipsum repellendus, assumenda fuga natus. Natus laborum, eos nisi voluptatem quia saepe provident ipsa ullam iusto eum illo facere commodi nihil.
  Magni accusamus maxime odit doloremque sapiente labore ad delectus eum totam, earum odio nobis eveniet commodi accusantium impedit eaque ipsa maiores numquam quos dolorum ex! Itaque labore similique nulla asperiores.`,
  thumbnailUrl: 'https://picsum.photos/200/300',
  thumbnailAlt: 'Random image from lorem picsum',
  rating: 4.5
}

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Main>
        <ProductDetails data={dummyData} />  
      </Main>
      <Footer/>
    </div>
  )
}

export default HomePage
