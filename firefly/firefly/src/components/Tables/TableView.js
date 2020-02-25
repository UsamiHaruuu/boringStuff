import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Icon from "@material-ui/core/Icon";
import { green } from "@material-ui/core/colors";

const columns = [
  { id: "name", label: "Name", minWidth: 50 },
  // { id: "email", label: "email", minWidth: 100 },
  {
    id: "status",
    label: "status",
    minWidth: 50,
    align: "center",
    format: value => value.toLocaleString()
  }
];
const useStyles = makeStyles({
  root: { width: 230 },
  container: {
    maxHeight: 300
  },
  tables: {}
});

// const StyledTableCell = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.text.primary,
//     color: theme.palette.common.white
//   },
//   body: {
//     backgroundColor: " #006064",
//     color: theme.palette.common.white,
//     fontSize: 10
//   }
// }))(TableCell);

export const TableView = ({ Data }) => {
  const classes = useStyles();
  const rows = Data;
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = event => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value === true ||
                          value === false ||
                          column.id === "name" ? (
                            column.id === "name" ? (
                              <a href="mailto: {value}">{value}</a>
                            ) : value === true ? (
                              <Icon style={{ color: green[500] }}>
                                add_circle
                              </Icon>
                            ) : (
                              <Icon color="secondary">add_circle</Icon>
                            )
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
