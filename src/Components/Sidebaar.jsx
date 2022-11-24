import { AiFillWallet,AiFillSetting,AiOutlineLogout } from 'react-icons/ai';
import {MdOutlineProductionQuantityLimits,MdOutlineAnalytics} from 'react-icons/md'
import {GrSchedule} from 'react-icons/gr'
import {FcMoneyTransfer} from 'react-icons/fc'
import {FaHandsHelping} from 'react-icons/fa'
import {CgCommunity} from 'react-icons/cg'
import {BiBookContent} from 'react-icons/bi'

export const Sidebaar = ()=>{


    return (
        <div className="sidebaar"> 
            <div>
                <h1>LOGO</h1>
            </div>
            <div className='undersidebaar'>
               <div>
                <AiFillWallet/>
                <p>OverView</p>
                </div>
                <div>
                    <MdOutlineProductionQuantityLimits/>
                 <p>Products</p>    
                </div> 
                <div>
                    <MdOutlineAnalytics/>
                    <p>Analytics</p>
                </div>
                <div>
                    <GrSchedule/>
                    <p>Schedule</p>
                </div>
                <div>
                    <FcMoneyTransfer/>
                    <p>Payout</p>
                </div>
                <div>
                    <BiBookContent/>
                    <p>Statements</p>
                </div>
                <div>
                    <hr />
                </div>
            </div>
            <div className='undersidebaar'>
                <div style={{border:"none"}}>
                    <FaHandsHelping/>
                   <p>Help</p>
                </div>
                <div>
                    <CgCommunity/>
                   <p>Community</p>
                </div>
                <div>
                    <AiFillSetting/>
                   <p>Settings</p>
                </div>
                <div>
                    <AiOutlineLogout/>
                   <p>Logout</p>
                </div>
            </div>
        </div>
    )
}