import { Link } from 'react-router-dom'
import { IProduct } from '../../../../types/product'
import { EyeInvisibleOutlined } from "@ant-design/icons"


type Props = {
    productsByPrice: IProduct[]
}

const FilterProductByPrice = (props: Props) => {

    return (
        <div className="flex flex-wrap items-center ">
            {props.productsByPrice.map((product) => (
                <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
                    <Link key={product._id} to={`/products/${product._id}`}>
                        <div className="border border-gray-200 rounded-md dark:border-gray-800 hover:-translate-y-1 hover:scale-105">
                            <div className="relative bg-gray-200">
                                <img
                                    src={product.images[0]}
                                    alt=""
                                    className="object-cover w-full h-56 mx-auto "
                                />
                                {product.salePrice > 0 && (
                                    <div className="absolute top-0 right-0 z-10 m-1 flex items-center justify-center w-16 h-16 p-5 text-center text-gray-100 bg-red-600 rounded-full shadow-xl ">
                                        <span className="relative text-base font-semibold text-gray-200 ">
                                            10% OFF
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-5 bg-gray-50 dark:bg-gray-900">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-medium dark:text-gray-400">
                                        {product.name}
                                    </h3>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="text-red-500 dark:text-gray-400 bi bi-heart"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
                                </div>
                                <div className="mb-4 ">
                                    <p className="text-lg ">
                                        <span className="text-red-400 dark:text-gray-400">
                                            ${product.price}
                                        </span>
                                        {product.salePrice < 0 ? <span className="ml-2 text-gray-400 line-through dark:text-gray-400">
                                        </span> : <span className="ml-2 text-gray-400 line-through dark:text-gray-400">
                                            ${product.salePrice}
                                        </span>}

                                    </p>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <ul className="flex ">
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="w-4 mr-1 text-yellow-500 dark:text-gray-400 bi bi-star "
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="w-4 mr-1 text-yellow-500 dark:text-gray-400 bi bi-star"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="w-4 mr-1 text-yellow-500 dark:text-gray-400 bi bi-star"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="w-4 mr-1 text-yellow-500 dark:text-gray-400 bi bi-star"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        </li>
                                    </ul>
                                    <p className="text-base font-normal text-gray-400 dark:text-gray-400">
                                        <span><EyeInvisibleOutlined className='mr-2' />{product.views}</span>
                                    </p>
                                </div>
                                <a
                                    href="#"
                                    className="flex justify-center px-4 py-2 text-blue-600 border border-blue-300 rounded-full dark:border-gray-600 dark:text-gray-400 hover:bg-blue-700 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900"
                                >
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </Link>
                </div>

            ))}
        </div>
    )
}

export default FilterProductByPrice