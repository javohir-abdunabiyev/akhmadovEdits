import { pagesHeader } from "../../components/header";

const header = document.querySelector(".header")
const vids_controls = document.querySelectorAll("video")

pagesHeader(header)

vids_controls.forEach(vid => {
    vid.onmouseenter = () => {
        vid.controls = true
    }

    vid.onmouseleave = () => {
        vid.controls = false
    }

})