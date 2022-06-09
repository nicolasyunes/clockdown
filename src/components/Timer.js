import { React, useState, useEffect } from "react";
import "./Timer.css";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
const Timer = () => {
	const [time, setTime] = useState(100);
	const [isRunning, setIsRunning] = useState(false);
	const [onOff, setOnOff] = useState(false);
	const [checked, setChecked] = useState(true);
	const [hr, setHr] = useState(time / 60);
	
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

	// console.log(timeConvert(time));

	return (
		<main className="container-timer w-100 p-5">
			<section className="content-timer">
				<section className="display">
					<div className="display-timer">
						<h3>
                            
							{onOff ? <span>{checked ? `${time} MIN` : `${timeConvert(time)} HRS`}</span> : ""}
						</h3>
					</div>
					<div className="buttons-display">
						<div className="arrows-buttons bg-info">
							<Button
								color="primary"
								onClick={() => setTime(time + 1)}
								disabled={!onOff}>
								+
							</Button>
							<Button
								color="secondary"
								onClick={() => setTime(time - 1)}
								disabled={!onOff}>
								-
							</Button>
						</div>
						<div className="bg-secondary">
							<Button color="warning" onClick={() => setOnOff(!onOff)}>
								{onOff ? "on" : "off"}
							</Button>
						</div>
					</div>
				</section>

				<section className=" container-controls">
					<div className="col-4">
						<div className="min-hour">
							
							<div className="format-time">
								<p>HRS</p>
								<Switch
									checked={checked}
									onChange={handleChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
								<p>MIN</p>
							</div>
						</div>
					</div>
					<div className="col-8 px-5">
						<Box >
							<Slider
								aria-label="Default"
								value={time}
								valueLabelDisplay={"auto"}
								disabled={!onOff}
								onChange={(e) => setTime(e.target.value)}
							/>
						</Box>
					</div>
				</section>
			</section>
		</main>
	);
};

export default Timer;

//.css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked

//.css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track

/*/<input 	type="range"
								value={time}
								className="custom-range"
								onChange={(e) => setTime(parseInt(e.target.value))}
								id="customRange3"></input> */
