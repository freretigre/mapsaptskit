import { memo, useEffect } from 'react';
import { getRootRemSizeNew } from '../utils';

const Layouts = memo(() => {

    useEffect(() => {
        getRootRemSizeNew({
            switchFlag: true,
            callback: (sizeVal: number) => {
                console.log("initRemSize: ", sizeVal);
                
            }
        });
    }, []);
    
    return (
        <div className='layout'>
            {/* <NavigationHeader /> */}
            <div>
                {/* <NavigationSider /> */}
                <div style={{ padding: '0 24px 24px' }}>
                    {/* <NavigationBreadcrumb /> */}
                    <div
                    className="content"
                    style={{
                        padding: 0,
                        margin: 0,
                        minHeight: 280,
                        // overflow: 'scroll'
                    }}
                    >
                     {/* <Outlet /> */}
                    </div>
                    <footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</footer>
                </div>
            </div>
        </div>
    )
});

export default Layouts;