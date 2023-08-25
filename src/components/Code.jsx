import { useContext } from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";

import { DataContext } from "../Context/Dataprovider";

const Container = styled(Box)`
display: flex;
background-color: #060606;
height : 55vh;
`


const Code = () => {
const {html, setHtml, css, setCss, js,setJs} = useContext(DataContext);

    return (
        <Container>
        <Editor heading="HTML" icon="/" color="#ff3c41" value={html} onchange={setHtml}></Editor>
        <Editor heading="CSS" icon="*" color="#0ebeff" value={css} onchange={setCss}></Editor>
        <Editor heading="JavaScript" icon="()" color="#fcd000" value={js} onchange={setJs}></Editor>
        </Container>
    )
}

export default Code;