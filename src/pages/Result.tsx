import { Address } from 'models'
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Paper,
  Typography
} from '@mui/material'
import { colors } from 'constant'
import { MainButton } from 'components'
import {
  useAppSelector,
  useAppDispatch,
  selectCustomerAddresses,
  cleanState
} from 'store'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import CottageIcon from '@mui/icons-material/Cottage'
import ReplayIcon from '@mui/icons-material/Replay'
import WorkIcon from '@mui/icons-material/Work'
import WorkOffIcon from '@mui/icons-material/WorkOff'

const staticData = {
  employmentData: {
    readableTitle: 'Current employment address',
    icon: <WorkIcon />
  },
  propertyAddress: {
    readableTitle: 'Property address',
    icon: <AccountBalanceIcon />
  },
  residentialAddress: {
    readableTitle: 'Residential address',
    icon: <CottageIcon />
  }
}

export default function Result(): JSX.Element {
  const { previousEmploymentData, ...restFullData } = useAppSelector(
    selectCustomerAddresses
  )
  const dispatch = useAppDispatch()

  const { employed: hasPreviousEmployment } = previousEmploymentData

  return (
    <Box marginX="auto" mt={6} textAlign="center" width="80%">
      <Paper sx={{ backgroundColor: colors.light }} elevation={3}>
        <Box p={2}>
          <Box mb={4}>
            <Typography variant="h5" color="primary" mb={2}>
              Information registered
            </Typography>
          </Box>
          <List sx={{ width: '80%', bgcolor: colors.light, margin: '0 auto' }}>
            {Object.entries(restFullData).map(([key, obj], idx) => {
              const icon = staticData[key as keyof typeof staticData].icon
              const readableTitle =
                staticData[key as keyof typeof staticData].readableTitle
              const { city, code, province, streetName, streetNumber } =
                obj as Address
              return (
                <Box key={`${idx}-${key}`} mb={2}>
                  {idx !== 0 && (
                    <Divider
                      variant="middle"
                      color={colors.darkOrange}
                      component="li"
                    />
                  )}
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>{icon}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={readableTitle}
                      secondary={`${streetNumber} ${streetName} ${city}, ${province} ${code.slice(
                        0,
                        3
                      )} ${code.slice(3)}`}
                    />
                  </ListItem>
                </Box>
              )
            })}
            {hasPreviousEmployment && (
              <Box mb={2}>
                <Divider
                  variant="middle"
                  color={colors.darkOrange}
                  component="li"
                />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkOffIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Previous employment address"
                    secondary={`${previousEmploymentData.streetNumber} ${
                      previousEmploymentData.streetName
                    } ${previousEmploymentData.city}, ${
                      previousEmploymentData.province
                    } ${previousEmploymentData.code.slice(
                      0,
                      3
                    )} ${previousEmploymentData.code.slice(3)}`}
                  />
                </ListItem>
              </Box>
            )}
          </List>
        </Box>
      </Paper>
      <Box mt={2}>
        <MainButton
          icon={<ReplayIcon />}
          text="Start over"
          toUrl="/"
          handleClick={() => {
            console.log('in!')
            dispatch(cleanState())
          }}
        />
      </Box>
    </Box>
  )
}
