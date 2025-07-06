import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Aheader from "../ACommon/Aheader"
import Anav from "../ACommon/Anav"
function Aboutadd() {
    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        title: "",
        img: "",
        logo: ""
    })

    // form halding 
    const getchnage = (e) => {
        setform({
            ...form,
            // new id
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    // submit data api 

    const getsubmit = async (e) => {
        e.preventDefault()

        try {

            if (form.title == "" || form.logo == "" || form.img == "") {
                console.log("Pls required this field...!")
                toast.error("Pls required this field...!")
                return false
            }

            const res = await axios.post("http://localhost:3000/about", form)
            console.log(res.data)
            redirect("/amanage")
             toast.success("Country Add successfully..!")
            setform({
                id: "",
                title: "",
                img: "",
                logo: ""
            })

        } catch (error) {
            console.log("Api data not Found..!")
        }
    }
  return (
    <div>
        <Aheader />
        <Anav title="About Add" name="About"/>

        <div className="conatiner py-5" >
                <div className="col-lg-8 mx-auto wow fadeInRight" data-wow-delay="0.3">

                    <h1 className="display-5 mb-4">About Add</h1>

                    <form onSubmit={getsubmit}>
                        <div className="row g-4">
                            <div className="col-12 ">
                                <div className="form-floating">
                                    <input value={form.title} name='title' onChange={getchnage} type="text" className="form-control" id="name" placeholder="Your Title" />
                                    <label htmlFor="name">Your Title</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="url" value={form.img} name='img' onChange={getchnage} className="form-control" id="subject" placeholder="Subject" />
                                    <label htmlFor="subject">Your image</label>
                                </div>
                            </div>
                             <div className="col-12">
                                <div className="form-floating">
                                    <input type="url" value={form.logo} name='logo' onChange={getchnage} className="form-control" id="logo" placeholder="logo" />
                                    <label htmlFor="subject">Your Logo</label>
                                </div>
                            </div>
                           
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3">Country add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Aboutadd