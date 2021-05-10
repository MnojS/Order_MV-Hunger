import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'

function Footer() {
	return (
		<footer>
			<Box 
				bgcolor='rgba(17, 15, 15, 0.993)' 
				color='white' 
				px={{xs:3,sm:10}} 
				py={{xs:5, sm:10}}>
				<Container maxWidth='lg'>
					<Grid container spacing={5}>
						<Grid item xs={12} sm={4}>
						<Box borderBottom={1} fontWeight='bold' paddingBottom='5px'>About Us</Box>
							<Box>
								<p fontSize="20px">
									Far far away, behind the world <br />
									mountains, far from the <br />
									countries Vakalia and <br />
									Consonantia, there live the <br />
									blind texts.
								</p>
							</Box>
							
							
						</Grid>
						<Grid item xs={12} sm={4}>
							<Box fontWeight='bold' borderBottom={1} paddingBottom='5px'>Have A Question?</Box>
							<Box>
								<p>
									203 Fake St. Mountain View,<br />
									San Frascisco, California,<br />
									USA
								</p>
							</Box>
							<Box>
								<p>
									+2 392 3929 210
								</p>
							</Box>
							<Box>
								<p>
									info@youturdomain.com
								</p>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
						<Box borderBottom={1} fontWeight='bold' paddingBottom='5px'>Services</Box>
							<Box>
								<p>
									Cooked
								</p>
							</Box>
							<Box>
								<p>
									Deliver
								</p>
							</Box>
							<Box>
								<p>
									Quality Foods
								</p>
							</Box>
						</Grid>
					</Grid>
					<Box textAlign='center' pt={{xs: 5, sm:10}} pb={{xs:5,sm:0}}>
						MV Hunger @reg; {new Date().getFullYear()}
					</Box>
				</Container>
			</Box>
		</footer>
	)
}

export default Footer
