// ==============================|| EXTERNAL COMPONENT IMPORT ||============================== //
import DashboardIcon from '@mui/icons-material/DashboardTwoTone';
// ==============================|| DASHBOARD MENU ITEMS ||============================== //
const dashboard = {
    id: 'dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: 'dashboard',
            icon: DashboardIcon,
            breadcrumbs: false
            // children: [
            //     {
            //         id: 'show-scenario',
            //         title: 'Show Scenario',
            //         type: 'item',
            //         url: 'scenario',
            //         icon: ContentPasteSearchIcon,
            //         breadcrumbs: false
            //     },
        }
    ]
};

export default dashboard;
