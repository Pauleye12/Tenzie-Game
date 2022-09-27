import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/header";
import Homepage from "./components/Homepage";
import RenderDie from "./components/renderDie";
import RollBtn from "./components/RollBtn";

function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function RandomNumber() {
    return Array.from(Array(10).keys()).map((_, index) => ({
        value: getRandomNumber(),
        isHeld: false,
        id: index,
    }));
}

function MainContent() {
    const [Value, setValue] = useState(RandomNumber());
    const [NoOfRolls, setNoOfRolls] = useState(0);

    // let TotalNumberOfRolls = 0;

    const regenerateNewArray = () => {
        setValue((value) => {
            return value.map((e, index) => {
                if (e.isHeld) {
                    return e;
                } else {
                    e.value = getRandomNumber();
                    e.id = index * 10; // i dont know why this is like this though
                    return e;
                }
            });
        });
        setNoOfRolls((prevState) => {
            let newstate = prevState + 1;
            return newstate;
        });
    };

    const toggleIsHeld = (id) => {
        setValue((prevState) => {
            return prevState.map((e) => (e.id === id ? { ...e, isHeld: !e.isHeld } : e));
        });
    };

    const [tenzies, setTenzies] = useState(false);

    useEffect(() => {
        const firstNumber = Value[0].value;
        const sameNumber = Value.every((e) => e.value === firstNumber && e.isHeld === true);

        if (sameNumber) {
            setTenzies(true);
        } else {
            setTenzies(false);
        }
    }, [Value]);

    const Refresh = () => {
        setValue(RandomNumber());
    };

    return (
        <div>
            <main className="wrapper">
                <Header tenzies={tenzies} />
                {!tenzies ? "" : <h3 className="NoOfRolls">Total number of rolls: {NoOfRolls}</h3>}
                <RenderDie Value={Value} handleToggle={toggleIsHeld} tenzies={tenzies} />
                <RollBtn
                    handleClick={regenerateNewArray}
                    tenzies={tenzies}
                    handleRefresh={Refresh}
                />
                {tenzies ? "" : <h3 className="NoOfRolls">current number of rolls: {NoOfRolls}</h3>}
            </main>
        </div>
    );
}

export default MainContent;
