import { Container } from "@mui/material";
import { useState } from "react";
import About from "~/components/content/about";
import Experience from "~/components/content/experience";
import Header from "~/components/header/header";

export function Welcome() {
      const [isActive, setActive] = useState<number>(1);
      console.log(isActive);
  return (
    <main className="justify-center pt-2 pb-2 pl-8 pr-8">
        <Header setActive={setActive} isActive={isActive}/>
        <Container>
          {isActive ? (
            <Experience/>

          ):(
            <About/>
          )}
        </Container>
    </main>
  );
}

