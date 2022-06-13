import { React, useState, useEffect } from "react";
import "./Timer.css";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import { ReactSVG } from "react-svg";
import clocksvg from "../assets/MapletonHill-FE/MapletonHill-FE/clocksvg.svg";
import down from "../assets/MapletonHill-FE/MapletonHill-FE/down.svg";
import up from "../assets/MapletonHill-FE/MapletonHill-FE/up.svg";
import clock from "../assets/MapletonHill-FE/MapletonHill-FE/clocksvg.svg";
const Timer = () => {
	const [time, setTime] = useState(100);
	const [isRunning, setIsRunning] = useState(false);
	const [onOff, setOnOff] = useState(false);
	const [checked, setChecked] = useState(true);
	const [hr, setHr] = useState(time / 60);
	const [color, setColor] = useState("#ffff");

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	useEffect(() => {
		setHr(time / 60);
	}, [time]);

	function timeConvert(n) {
		//convert minutes to hours
		let num = n; //90
		let hours = num / 60; //90/60 = 1.5

		let rhours = Math.floor(hours); //1

		let minutes = (hours - rhours) * 60; //29.0000...

		let rminutes = Math.round(minutes); //29

		if (rhours < 10) {
			return `0${rhours}: 
            ${rminutes < 10 ? "0" : ""}${rminutes}`;
		} else {
			return `${rhours}:${rminutes}`;
		}
	}

	const handleOnOff = () => {
		setColor(onOff ? "#ffff" : "#9dd3e1");
		setOnOff(!onOff);
		setTime(100);
		if (onOff) {
			setIsRunning(false);
		}
	};

	// console.log(timeConvert(time));

	return (
		<main className="container-timer w-100 p-5">
			<div className="content-timer">
				<section className="display">
					<div className="display-timer">
						<div className="display-numbers">
							{onOff ? (
								<>
									<span>
										<img width="46" height="46" src={clock} />
									</span>
									<span> {checked ? `${time} MIN` : `${timeConvert(time)} HRS`}</span>
								</>
							) : (
								""
							)}
						</div>
					</div>
					<div className="buttons-display">
						<div className="arrows-buttons col-6 ">
							<span className="p-1 ">
								<Button
									onClick={() => setTime(time + 1)}
									disabled={!onOff}
									className="key__button">
									<img src={up} alt="arrow" />
								</Button>
							</span>
							<span className="p-1">
								<Button
									className="key__button"
									onClick={() => setTime(time - 1)}
									disabled={!onOff}>
									<img src={down} alt="arrow" />
								</Button>
							</span>
						</div>
						<span className="container-power col-6">
							<Button className=" key__button p-1" onClick={() => handleOnOff()}>
								<span
									className={`circle`}
									style={{ backgroundColor: `${color}` }}></span>
								<span>POWER</span>
							</Button>
						</span>
					</div>
				</section>

				<section className=" container-controls">
					<StyledMinHr className="col-12 d-flex justify-content-center ">
						<div className="min-hour">
							<div className="format-time">
								<div>HRS</div>
								<Switch
									checked={checked}
									onChange={handleChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
								<div>MIN</div>
							</div>
						</div>

						<div className="col-8 px-5">
							<Box>
								<Slider
									aria-label="Default"
									value={time}
									valueLabelDisplay={"auto"}
									disabled={!onOff}
									onChange={(e) => setTime(e.target.value)}
								/>
							</Box>
						</div>
					</StyledMinHr>
				</section>
			</div>
		</main>
	);
};

export default Timer;

//Estilo de los botones de la pantalla de hora/minutos con styled components
const StyledMinHr = styled.div`
	.MuiSwitch-thumb {
		background-image: -webkit-repeating-linear-gradient(
				left,
				hsla(0, 0%, 100%, 0) 0%,
				hsla(0, 0%, 100%, 0) 6%,
				hsla(0, 0%, 100%, 0.1) 7.5%,
				hsla(0, 0%, 100%, 0) 9%
			),
			-webkit-repeating-linear-gradient(left, hsla(0, 0%, 0%, 0) 0%, hsla(
							0,
							0%,
							0%,
							0
						)
						4%, hsla(0, 0%, 0%, 0.03) 4.5%, hsla(0, 0%, 0%, 0) 6%),
			-webkit-repeating-linear-gradient(left, hsla(0, 0%, 100%, 0) 0%, hsla(
							0,
							0%,
							100%,
							0
						)
						1.2%, hsla(0, 0%, 100%, 0.15) 2.2%, hsla(0, 0%, 100%, 0) 4%),
			-webkit-linear-gradient(-90deg, hsl(0, 0%, 78%) 0%, hsl(0, 0%, 90%) 47%, hsl(
							0,
							0%,
							78%
						)
						53%, hsl(0, 0%, 70%) 100%);
	}

	.MuiSwitch-track {
		background-color: rgba(42, 42, 43, 255);
		box-shadow: inset 0px 0px 0px 3px rgba(40, 40, 40, 255);
	}

	.css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked
		+ .MuiSwitch-track {
		background-color: rgba(42, 42, 43, 255);
	}

	.MuiSlider-thumbColorPrimary {
		background-image: -webkit-repeating-linear-gradient(
				left,
				hsla(0, 0%, 100%, 0) 0%,
				hsla(0, 0%, 100%, 0) 6%,
				hsla(0, 0%, 100%, 0.1) 7.5%,
				hsla(0, 0%, 100%, 0) 9%
			),
			-webkit-repeating-linear-gradient(left, hsla(0, 0%, 0%, 0) 0%, hsla(
							0,
							0%,
							0%,
							0
						)
						4%, hsla(0, 0%, 0%, 0.03) 4.5%, hsla(0, 0%, 0%, 0) 6%),
			-webkit-repeating-linear-gradient(left, hsla(0, 0%, 100%, 0) 0%, hsla(
							0,
							0%,
							100%,
							0
						)
						1.2%, hsla(0, 0%, 100%, 0.15) 2.2%, hsla(0, 0%, 100%, 0) 4%),
			-webkit-linear-gradient(-90deg, hsl(0, 0%, 78%) 0%, hsl(0, 0%, 90%) 47%, hsl(
							0,
							0%,
							78%
						)
						53%, hsl(0, 0%, 70%) 100%);
	}
	.MuiSlider-track {
		color: #9dd3e1;
	}
`;
