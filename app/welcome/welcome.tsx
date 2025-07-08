import About from "~/components/content/about";
import Header from "~/components/header/header";
import Experience from "~/components/content/experience";

import { useState } from "react";
import { Container } from "@mui/material";

export function Welcome() {

  const [isActive, setActive] = useState<number>(0);

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

