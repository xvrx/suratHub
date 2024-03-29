import styled from "styled-components";



export const LoaderContainer = styled.div`
/* CONTAINER */
.preloader-js-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.preloader-js-container .shadow {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}
`





export const NotifContainer = styled.div`

/* SPINNER */
.preloader-js {
  display: inline-block;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 64px;
  height: 64px;
  transform: translate(-50%, -50%);
}

.preloader-js div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 10px;
  border: 10px solid black;
  border-radius: 50%;
  animation: preloader-js 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #00b0b9 transparent transparent transparent;
}

.preloader-js div:nth-child(1) {
  animation-delay: -0.45s;
}

.preloader-js div:nth-child(2) {
  animation-delay: -0.3s;
}

.preloader-js div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes preloader-js {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


`
