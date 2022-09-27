import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Homepage from "./components/Homepage";
import RenderDie from "./components/renderDie";
import RollBtn from "./components/RollBtn";

function MainContent() {
  const RandomNumber = () => {
    const newArr = [];
    for (let i = 1; i < 11; i++) {
      let num = Math.floor(Math.random() * 6) + 1;
      let object = {
        value: num,
        isHeld: false,
        id: i,
      };
      newArr.push(object);
    }
    return newArr;
  };

  const [Value, setValue] = useState(RandomNumber());
  const [NoOfRolls, setNoOfRolls] = useState(0);

  // let TotalNumberOfRolls = 0;

  const regenerateNewArray = () => {
    setValue((value) => {
      return (value.map((e, index) =>
        e.isHeld
          ? e
          : (() => {
              let num = Math.floor(Math.random() * 6) + 1;
              let object = {
                value: num,
                isHeld: false,
                id: index * 10,
              };
              return object;
            })()
      ))
    })
    setNoOfRolls((prevState) => {
      let newstate = prevState + 1
      return newstate
    } );
  };

  // const TotalNumberOfRolls = () => {
  //   setNoOfRolls((prevState) => (newstate = prevState + 1));
  // };
  const toggleIsHeld = (id) => {
    setValue((prevState) => {
      return prevState.map((e) => {
        return e.id === id ? { ...e, isHeld: !e.isHeld } : e;
      });
    });
  };

  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = Value.every((e) => e.isHeld === true);
    const firstNumber = Value[0].value;
    const sameNumber = Value.every((e) => e.value === firstNumber);

    if (allHeld && sameNumber) {
      setTenzies(true);
    } else {
      setTenzies(false);
    }
  }, [Value]);

  const Refresh = () => {
    setValue(RandomNumber())
    setNoOfRolls(0)
  };

  return (
    <div>
      <main className="wrapper">
        <Header tenzies={tenzies} />
        {!tenzies ? (
          ""
        ) : (
          <h3 className="NoOfRolls">Total number of rolls: {NoOfRolls}</h3>
        )}
        <RenderDie
          Value={Value}
          handleToggle={toggleIsHeld}
          tenzies={tenzies}
        />
        <RollBtn
          handleClick={regenerateNewArray}
          tenzies={tenzies}
          handleRefresh={Refresh}
        />
        {tenzies ? (
          ""
        ) : (
          <h3 className="NoOfRolls">current number of rolls: {NoOfRolls}</h3>
        )}
      </main>
    </div>
  );
}

export default MainContent;
