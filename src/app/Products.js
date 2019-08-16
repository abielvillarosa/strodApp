import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
// import { CardActions, CardMedia, Button } from '@material-ui/core'

const Product = (props) => {
    return(
        <div>
          { props.product ? (
                <Card>
                    {/* <CardMedia style={{height: 0, paddingTop: '56.25%', size:"small"}}
                        // image={props.course.fields.courseImage.fields.file.url}
                        image="https://github.com/abielvillarosa/strodApp/blob/master/src/app/images/bagel.JPG?raw=true"
                        title={props.product.productName}
                        /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h3">
                            {props.product.productName}
                        </Typography>
                        <Typography component="p">
                            Required Points: {props.product.requiredPts}
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small" color="primary" href={props.course.fields.url} target="_blank">
                        <Button size="small" color="primary" href="" target="_blank">
                            Redeem
                        </Button> 
                    </CardActions> */}
                </Card>
          ): null }  
        </div>
    )
}
export default Product