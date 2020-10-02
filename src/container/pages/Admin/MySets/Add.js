import React from "react"
import { useHistory } from "react-router-dom"
import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Button, Grid, Typography, TextField, Divider } from "@material-ui/core"
import MuiAlert from "@material-ui/lab/Alert"
import { makeStyles } from "@material-ui/core/styles"
import { useForm } from "react-hook-form"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

export const Add = withAuthenticationRequired(() => {
  const [error, setError] = React.useState(null)
  const [formFields, setFormFields] = React.useState(
    [1, 2, 3, 4]
    // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
  )
  const classes = useStyles()
  const history = useHistory()
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = async (data) => {
    const filledFields = formFields.filter((id) => {
      if (data["artist" + id] !== "") {
        return id
      }
    })
    const formattedTrackFields = filledFields.map((id) => {
      return {
        artist: data["artist" + id],
        title: data["title" + id],
        image: data["image" + id],
        starttime: data["starttime" + id],
      }
    })

    const res = await fetch(process.env.REACT_APP_TRACK_HOST + "/tracklist", {
      method: "POST",
      body: JSON.stringify({
        artist: data["set-artist"],
        title: data["set-title"],
        reference: data["set-identifier"],
        tracks: formattedTrackFields,
      }),
    })
    res
      .json()
      .then((res) => {
        if (res.status === 200) {
          history.push("/admin/my-sets")
        } else {
          setError(res.message)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  // new Dropzone('#file-upload', {
  //   url: '/tracklist/chunk',
  //   chunking: true,
  //   chunkSize: (1024 * 1024),
  //   forceChunking: true,
  //   acceptedFiles: 'audio/mpeg,audio/mp3',
  //   createImageThumbnails: false,
  //   maxFiles: 1,
  //   chunksUploaded: function (file, done) {
  //       // $('#inputref').val(file.upload.uuid);
  //       // done();
  //   }
  // });

  const formFieldTemplate = formFields.map((id) => {
    const artistIdentifier = "artist" + id
    const titleIdentifier = "title" + id
    const imageIdentifier = "image" + id
    const startIdentifier = "starttime" + id
    return (
      <React.Fragment key={id}>
        <Grid item xs={2}>
          <Typography variant="h5">{id}.</Typography>
        </Grid>
        <Grid item xs={5}>
          <TextField
            label="Artist"
            fullWidth
            name={artistIdentifier}
            id={artistIdentifier}
            inputRef={register}
            error={errors[artistIdentifier] !== undefined}
            helperText={errors[artistIdentifier] && errors[artistIdentifier].message}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            label="Title"
            fullWidth
            name={titleIdentifier}
            id={titleIdentifier}
            inputRef={register}
            error={errors[titleIdentifier] !== undefined}
            helperText={errors[titleIdentifier] && errors[titleIdentifier].message}
          />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5}>
          <TextField
            label="Image"
            fullWidth
            name={imageIdentifier}
            id={imageIdentifier}
            inputRef={register}
            error={errors[imageIdentifier] !== undefined}
            helperText={errors[imageIdentifier] && errors[imageIdentifier].message}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            label="Start time"
            fullWidth
            name={startIdentifier}
            id={startIdentifier}
            inputRef={register}
            error={errors[startIdentifier] !== undefined}
            helperText={errors[startIdentifier] && errors[startIdentifier].message}
          />
        </Grid>
      </React.Fragment>
    )
  })

  const setArtistIdentifier = "set-artist"
  const setTitleIdentifier = "set-title"
  const setReferenceIdentifier = "set-identifier"

  const errorMessage = error ? <MuiAlert severity="warning">{error}</MuiAlert> : null
  return (
    <>
      <Typography variant="h4">Add a new set</Typography>
      {errorMessage}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <div id="file-upload" className="dropzone" />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5">Set</Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Artist"
              fullWidth
              name={setArtistIdentifier}
              id={setArtistIdentifier}
              inputRef={register({ required: "This field is required" })}
              error={errors[setArtistIdentifier] !== undefined}
              helperText={
                errors[setArtistIdentifier] && errors[setArtistIdentifier].message
              }
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Title"
              fullWidth
              name={setTitleIdentifier}
              id={setTitleIdentifier}
              inputRef={register({ required: "This field is required" })}
              error={errors[setTitleIdentifier] !== undefined}
              helperText={
                errors[setTitleIdentifier] && errors[setTitleIdentifier].message
              }
            />
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={10}>
            <TextField
              label="Reference"
              fullWidth
              name={setReferenceIdentifier}
              id={setReferenceIdentifier}
              inputRef={register({ required: "This field is required" })}
              error={errors[setReferenceIdentifier] !== undefined}
              helperText={
                errors[setReferenceIdentifier] &&
                errors[setReferenceIdentifier].message
              }
            />
          </Grid>
          {formFieldTemplate}
        </Grid>
        <Button type="submit">Save</Button>
      </form>
    </>
  )
})
