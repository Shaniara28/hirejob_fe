import LayoutPage from '@/Components/LayoutPage/LayoutPage'
import SectionPage from '@/Components/Section/LandingPage/SectionPage'
import style from './style.module.css'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import MainProfile from './MainProfile'

const LayoutProfile = ({children}) => {
    return (
                <MainProfile>
                    <LeftSide>
                        {children}
                    </LeftSide>
                    <RightSide>
                        {children}
                    </RightSide>
                </MainProfile>
    )
}

export default LayoutProfile