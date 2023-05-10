import React, { useEffect, useState } from "react";

import { FormControl, FormControlLabel, FormGroup, NativeSelect, Switch } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PlaceIcon from "@mui/icons-material/Place";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import { getCitiesAutocomplete, getPopularCities } from "../../API";

import BatButton from "../batButton";

import "./index.css";

const AutoComplete = () => {
	const [tripType, setTripType] = useState("round-trip");
	const [fromQuery, setFromQuery] = useState("");
	const [toQuery, setToQuery] = useState("");
	const [results, setResults] = useState([]);
	const [popularCities, setPopularCities] = useState([]);
	const [departureDate, setDepartureDate] = React.useState<Dayjs | null>(dayjs(new Date()));
	const [returnDate, setReturnDate] = React.useState<Dayjs | null>();

	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	const [passangersCount, setPassangersCount] = useState(0);

	useEffect(() => {
		getPopularCities().then((data) => {
			setPopularCities(data);
		});
	}, []);

	const handleTripTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setTripType(value);
	};

	const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, query: string, setQuery: any) => {
		const value = e.target.value;
		setQuery(value);
		await getCitiesAutocomplete(query).then((data) => {
			setResults(data);
		});
	};

	return (
		<div className="SearchBar">
			<div className="SelectBox">
				<FormControl fullWidth>
					<NativeSelect
						className="way"
						inputProps={{
							name: "Select",
							id: "uncontrolled-native",
						}}
						value={tripType}
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleTripTypeChange(e)}>
						<option value={"one-way"}>One-way</option>
						<option value={"round-trip"}>Round trip</option>
					</NativeSelect>
				</FormControl>
				<FormControl fullWidth>
					<NativeSelect
						// onClick={handleClick}
						className="personOption"
						defaultValue={1}
						disabled
						inputProps={{
							name: "Select",
							id: "uncontrolled-native",
						}}>
						{/* <option value={1}>0 adult</option> */}
						<option value={1}>{passangersCount > 0 ? `${passangersCount} Adults` : `${passangersCount} Adult`}</option>
					</NativeSelect>
				</FormControl>
			</div>
			<div className="inputs">
				<Autocomplete
					className="fromInput"
					freeSolo
					options={results.map((item: any) => item.local_name)}
					renderInput={(params: any) => (
						<TextField
							{...params}
							label="From: City, Station Or Airport"
							value={fromQuery}
							onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
								handleInputChange(e, fromQuery, setFromQuery)
							}
						/>
					)}
				/>
				<Autocomplete
					className="Toinput"
					freeSolo
					options={results.map((item: any) => item.local_name)}
					renderInput={(params: any) => (
						<TextField
							{...params}
							label="To: City, Station Or Airport"
							value={toQuery}
							onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
								handleInputChange(e, toQuery, setToQuery)
							}
						/>
					)}
				/>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker label="Departure" value={departureDate} onChange={(newValue: any) => setDepartureDate(newValue)} />
				</LocalizationProvider>
				{tripType === "round-trip" && (
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker label="Return" value={returnDate} onChange={(newValue: any) => setReturnDate(newValue)} />
					</LocalizationProvider>
				)}

				<button className="SearchButton">
					<b>Search</b>
				</button>
			</div>
			<div className="SwitchButton">
				<FormGroup>
					<FormControlLabel control={<Switch defaultChecked />} label="Find my accommodation" />
				</FormGroup>
				<BatButton onClick={handleClick} />
				<Popover
					id={id}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "center",
					}}
					anchorPosition={{ top: 228, left: 400 }}>
					<Typography sx={{ p: 2 }}>
						<List>
							{popularCities.map((city: any) => {
								return (
									<ListItem>
										<ListItemIcon>
											<PlaceIcon />
										</ListItemIcon>
										<ListItemText primary={city.local_name} />
									</ListItem>
								);
							})}
						</List>
					</Typography>
				</Popover>
			</div>
		</div>
	);
};

export default AutoComplete;
