import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import EmailIcon from "@material-ui/icons/Email";
import { Link } from "react-router-dom";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";

const useStyles = makeStyles({
  container: {
    maxHeight: 300
  },
  tables: {}
});

export const TableView = ({ Data }) => {
  const TruncateData = Data.slice(1, 4);
  const classes = useStyles();
  const rows = TruncateData;
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(10);
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell width={3}>
                      {row.status === true ? (
                        <PriorityHighIcon style={{ color: "orange" }} />
                      ) : (
                        <PriorityHighIcon color="secondary" />
                      )}
                    </TableCell>
                    <TableCell>
                      {row.name}
                      <br />
                      <strong style={{ fontSize: "10px" }}>{row.type}</strong>
                    </TableCell>
                    <TableCell>
                      {row.name === "Mike Lee"
                        ? "Thank him for last purchase"
                        : row.name === "Bob Marley"
                        ? "Follow up on next show"
                        : "Quartely checkin"}
                    </TableCell>
                    <TableCell>
                      <Link
                        to={{
                          pathname: "/audience",
                          info: {
                            name: row.name.trim(),
                            email: row.email,
                            open: true
                          }
                        }}
                      >
                        <EmailIcon />
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
