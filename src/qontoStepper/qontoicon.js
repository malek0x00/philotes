import PropTypes from 'prop-types';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import QontoConnector from './qontoConnector';

function QontoStepIcon(props) {
    const { active, completed, className } = props;
    const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
        color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
        ...(ownerState.active && {
          color: '#FE7B5E',
        }),
        '& .QontoStepIcon-completedIcon': {
          color: '#FE7B5E',
          zIndex: 1,
          fontSize: 18,
        },
        '& .QontoStepIcon-circle': {
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: 'currentColor',
        },
      }));
    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }
  
  QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
  };

  export default QontoStepIcon;