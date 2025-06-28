import { useState} from "react"
import axios from "axios"
import Aheader from "../ACommon/Aheader"
import Anav from "../ACommon/Anav"

import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
function Serviceadd() {
    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        title: "",
        image: "",
        desc: ""
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

            if (form.title == "" || form.desc == "" || form.image == "") {
                console.log("Pls required this field...!")
                toast.error("Pls required this field...!")
                return false
            }

            const res = await axios.post("http://localhost:3000/services", form)
            console.log(res.data)
            redirect("/servicemanage")
             toast.success("Service Add successfully..!")
            setform({
                id: "",
                title: "",
                image: "",
                desc: ""
            })

        } catch (error) {
            console.log("Api data not Found..!")
        }
    }
    return (
        <div>
            <Aheader />
            <Anav title="Service Add" name="Service" />

            <div className="conatiner py-5" >
                <div className="col-lg-8 mx-auto wow fadeInRight" data-wow-delay="0.3">

                    <h1 className="display-5 mb-4">Service Add</h1>

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
                                    <input type="url" value={form.image} name='image' onChange={getchnage} className="form-control" id="subject" placeholder="Subject" />
                                    <label htmlFor="subject">Your image</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea value={form.desc} name='desc' onChange={getchnage} className="form-control" placeholder="Leave Message Here" id="message" style={{ height: 160 }} defaultValue={""} />
                                    <label htmlFor="message">Message Description</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3">Service add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Serviceadd