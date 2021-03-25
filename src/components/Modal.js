import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ModalUi from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "70%",
		margin: "0 auto",
		border: "1px solid black",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

export const Modal = ({ children }) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	let history = useHistory();

	const handleClose = () => {
		setOpen(false);
		history.goBack();
	};

	useEffect(() => {
		setOpen(true);
	}, []);
	return (
		<ModalUi
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className={classes.modal}
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}>{children}</Fade>
		</ModalUi>
	);
};
