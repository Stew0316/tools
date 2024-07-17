import { Button, ErrorBlock, Input, Tag, Space, Toast   } from 'antd-mobile'
import { useState } from 'react'
const mapTheme = {
  0: '#666666',
  1: '#1677ff',
  2: '#00b578',
  3: '#ff8f1f',
  4: '#ff3141',
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const Rand = () => {
  const [reslut, setReslut] = useState('')
  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const Show = () => {
    if(data.length == 0)  return <div style={{
      fontSize: '16px'
    }}>当前暂未添加</div>
    return <Space wrap>
      {
        data.map((item, index) => {
          return <div 
            style={{
              padding: '0px 12px',
              borderRadius: '4px',
              lineHeight: '36px',
              boxSizing: "border-box",
              color: '#fff',
              fontSize: '16px',
              backgroundColor: `${mapTheme[index%5]}`
            }}
            key={index}
          >{item}</div>
        })
      }
    </Space>
  }
  const add = () => {
    if(!value) return Toast.show({
      content: '当前输入为空',
    })
    data.push(value)
    setData([...data])
    setValue("")
    setReslut("")
  }
  const randRes = () => {
    if(!data.length) return Toast.show({
      content: '当前没有选项随机~',
    })
    if(data.length == 1) return Toast.show({
      content: '当前选项只有一个，达咩',
    })
    const len = data.length
    const ind = getRandomInt(len)
    console.log(ind)
    setReslut(data[ind])
  }
  const enter = (val) => {
    // console.log(val)
    const value = val.target.value
    setValue(value)
    add()
  }
  const clear = () => {
    setData([])
    setReslut("")
  }
  return (
    <div
      style={{
        height: '80vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center",
        background: "linear-gradient(#eee, #fff)",
        padding: "8px"
      }}
    >
      <Show></Show>
      <div style={{
        display: 'flex',
        marginTop: '10px',
      }}>
        <Input 
          onEnterPress={val => enter(val)}
          style={{
            flex: 1,
            border: '1px solid #eee',
            borderRadius: '3px',
            marginRight: '6px',
            padding: '6px',
            background: '#fff'
          }}
          placeholder='输入你想添加的物品'
          value={value}
          onChange={val => {
            setValue(val)
          }}
        />
        
      </div>
      <div style={{
        display: 'flex',
        marginTop: '10px',
      }}>
        <Button 
          color='primary' 
          fill='solid' 
          style={{
            marginRight: '18px',
          }}
          onClick={add}
        >添 加</Button>
        <Button
          color='success'
          style={{
            marginRight: '18px',
          }}
          onClick={randRes}
        >随 机</Button>
        <Button
          onClick={clear}
          
        >清空选项</Button>
        
      </div>
      <div style={{
        marginTop: '10px',
        fontSize: '16px',
        textAlign: 'center'
      }}>当前结果是:<br />
        <div style={{marginTop: "6px", fontWeight: "bold", fontSize: "26px"}}>
          {reslut ? reslut: "-"}
        </div>
      </div>
    </div>
  )
}

export default Rand