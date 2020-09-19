import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Button, Typography } from "@material-ui/core"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Moment from "react-moment"
import IconEdit from "@material-ui/icons/Edit"
import IconDelete from "@material-ui/icons/Delete"
import Alert from "@material-ui/lab/Alert"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  new: {
    //@todo align button to the right
  },
}))

export const MySets = withAuthenticationRequired(() => {
  const [sets, setSets] = useState([])
  const classes = useStyles()

  async function fetchData() {
    const res = await fetch(process.env.REACT_APP_TRACK_HOST + "/tracklist/artist/1")
    res
      .json()
      .then((res) => setSets(res))
      .catch((err) => {
        console.error(err)
      })
  }

  const editSet = (id) => {}

  const deleteSet = (id) => {
    alert(id)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Typography variant="h4">
        My Sets
        <Link to="/admin/my-sets/add">
          <Button variant="contained" color="primary" className={classes.new}>
            Add new set
          </Button>
        </Link>
      </Typography>
      {sets !== null && (
        <TableContainer>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {sets.map((set) => (
                <TableRow key={set.id}>
                  <TableCell>
                    {set.artist} - {set.title}
                  </TableCell>
                  <TableCell>
                    <Moment format="d MMMM YYYY / HH:mm">
                      {set.createdAt.date}
                    </Moment>
                  </TableCell>
                  <TableCell>
                    {/* <IconEdit onClick={() => editSet(set.id)} /> */}
                    {/* <IconDelete onClick={() => deleteSet(set.id)} /> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
})
