import { Component } from "../../components/Component"

export type HomeProps = {
  text: string;
}

export const Home= ({ text })=> {
  return <Component text={text}/>
}
