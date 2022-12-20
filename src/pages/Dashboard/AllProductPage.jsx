import axios from "axios";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlinePending } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import DashboardLeft from "../../components/DashboardLeft";
import Loader from "../../components/Loader";
import { serverLink } from "../../constants";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { useContext } from "react";
import { ProductsContext } from "../../App";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AllProductPage = () => {
  const [products, setProducts] = useState([]);
  const {user} = useContext(ProductsContext)
  const navigate = useNavigate();
  const titleRef = useRef();
  const idRef = useRef();
  const priceRef = useRef();
  const instockRef = useRef();
  const tagsRef = useRef();
  const descriptionRef = useRef();

  useEffect(() => {
    axios.get(`${serverLink}/product/allProduct`).then(
      (res) => {
        setProducts(res.data.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const handleDeleteProduct = (id) => {
    fetch(`${serverLink}/product/deleteProduct`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          navigate("/dashboard");
        }
      });
  };

  const handleUpdateProduct = (id) => {};

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <main>
    {
      user.role === 'admin'?
      <section className="flex justify-start md:space-x-10">
      <div>
        <DashboardLeft />
      </div>

      {products.length ? (
        <div className="flex flex-col space-y-14 w-screen overflow-x-scroll sm:w-auto">
          <div>
            <h3 className="text-center font-raleway text-3xl font-medium text-secondary underline underline-offset-8 pb-4">
              Products Collection
            </h3>
            <table className=" ">
              <thead className="">
                <tr>
                  <th></th>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Instock</th>
                  <th>Tags</th>
                  <th>Category</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className=" ">
                {products.map((product) => {
                  const {
                    image,
                    id,
                    price,
                    title,
                    instock,
                    tags,
                    category,
                    _id,
                  } = product;
                  return (
                    <tr className="font-nunito text-lg my-2 hover:bg-secondaryLight duration-500">
                      <td>
                        <div className="my-3 mx-4">
                          <img
                            src={image}
                            alt={title}
                            className="h-[80px] w-[80px]"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="my-3 mx-4">
                          <h3>{id}</h3>
                        </div>
                      </td>
                      <td>
                        <div className="my-3 mx-4 capitalize">
                          <h3>{title}</h3>
                        </div>
                      </td>
                      <td>
                        <div className="my-3 mx-4">
                          <h3>${price}</h3>
                        </div>
                      </td>
                      <td>
                        <div className="my-3 mx-4">
                          <h3>{instock}</h3>
                        </div>
                      </td>

                      <td>
                        <div className="my-3 mx-4">
                          <h3>{category}</h3>
                        </div>
                      </td>
                      <td>
                        <div className="my-3 mx-4">
                          <button className="bg-secondary w-[30px] h-[30px] font-semibold text-md rounded-full ">
                            {tags.length}
                          </button>
                        </div>
                      </td>
                      <td>
                        <div className="my-3 mx-6 text-xl cursor-pointer">
                          <MdOutlinePending onClick={openModal} />
                          <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                          >
                            <div className="flex justify-between items-center">
                              <h2 className="text-2xl font-medium text-secondary font-nunito ">
                                {title}
                              </h2>
                              <button onClick={closeModal}>
                                <ImCross />
                              </button>
                            </div>

                            <form>
                              <div className="pb-4 flex justify-between space-x-3">
                                <label htmlFor="id" className="w-full">
                                  <span className="text-md font-semibold font-nunito">
                                    Product ID :
                                  </span>
                                  <input
                                    type="text"
                                    ref={idRef}
                                    id="id"
                                    className="min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
                                  />{" "}
                                </label>
                                <label htmlFor="title" className="w-full">
                                  <span className="text-md font-semibold font-nunito">
                                    Title :
                                  </span>
                                  <input
                                    type="text"
                                    ref={titleRef}
                                    id="title"
                                    className="min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
                                  />{" "}
                                </label>
                              </div>

                              <div className="pb-4 flex justify-between space-x-3 w-full">
                                <label htmlFor="price" className="w-full">
                                  <span className="text-md font-semibold font-nunito">
                                    Price :
                                  </span>
                                  <input
                                    type="text"
                                    ref={priceRef}
                                    id="price"
                                    className="min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
                                  />{" "}
                                </label>
                                <label htmlFor="instock" className="w-full">
                                  <span className="text-md font-semibold font-nunito">
                                    Instock :
                                  </span>
                                  <input
                                    type="text"
                                    ref={instockRef}
                                    id="instock"
                                    className="min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
                                  />{" "}
                                </label>
                              </div>

                              <div className="py-4">
                                <button
                                  type="submit"
                                  className=" px-6 w-fit py-2 border-[0.5px] hover:bg-gray-700 font-raleway bg-white hover:text-primary duration-500 border-black uppercase xl:text-4xl xl:px-8 xl:py-4"
                                >
                                  Update Product
                                </button>
                                <br />
                                <p>More info can be changed if you need.</p>
                              </div>
                            </form>
                          </Modal>
                        </div>
                      </td>
                      <td>
                        <div className="my-3 mx-6 text-xl cursor-pointer">
                          <h3 onClick={() => handleDeleteProduct(_id)}>
                            <AiOutlineDelete />
                          </h3>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </section>
    :
    <NotFoundPage />
    }
    </main>
  );
};

export default AllProductPage;
