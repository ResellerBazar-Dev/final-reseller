import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function PrivacyPolicy({
  open,
  scroll,
  handleClosePrivacyPolicy,
}) {
  const descriptionElementRef = React.useRef(null);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClosePrivacyPolicy}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Privacy & Policy</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClosePrivacyPolicy}>Cancel</Button>
          <Button onClick={handleClosePrivacyPolicy}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
