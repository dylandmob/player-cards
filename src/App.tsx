import React from 'react';
import './App.css';
import data from './data';

const COLORS = {
  BACKGROUND: 'tan',
  TRIM: 'black', //#36454F
};

function App() {
  const styles = {
    box: {
      display: 'flex',
      alignItems: 'center',
      height: 446,
      width: 578,
      marginLeft: 20,
      marginBottom: 20,
      backgroundSize: 'cover',
      border: '3px solid charcoal',
      overflow: 'hidden',
    },
    avatar: {
      height: 300,
      width: 300,
      borderRadius: 150,
      border: `5px solid ${COLORS.TRIM}`,
      marginLeft: 5,
    },
    details: {
      position: 'absolute',
      left: 100,
      bottom: -5,
      display: 'flex',
    },
    name: {
      height: 60,
      border: `3px solid ${COLORS.TRIM}`,
      borderRadius: 50,
      color: COLORS.TRIM,
      fontSize: 50,
      paddingLeft: 15,
      paddingRight: 15,
      zIndex: 25,
    },
    classDetails: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: -20,
      fontSize: 20,
      backgroundColor: COLORS.TRIM,
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
      whiteSpace: 'nowrap',
      paddingLeft: 20,
      paddingRight: 10,
      zIndex: 0,
      borderSize: 1,
      borderStyle: 'solid',
      height: 30,
      marginTop: 25,
      fontWeight: 700,
    },
    table: {
      color: 'white',
      fontSize: 30,
      marginLeft: -20,
      paddingLeft: 40,
      marginRight: -50,
      paddingRight: 50,
      textAlign: 'center',
    },
  } as { [key: string]: React.CSSProperties };

  return (
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {data.map((c) => (
        <div style={{ ...styles.box, position: 'relative' }}>
          <img
            src={c.backgroundUrl}
            alt="background"
            style={{
              position: 'absolute',
              filter: 'blur(2.5px)',
              zIndex: -1,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              height: 446,
              width: 578,
            }}
          />

          <div style={{ position: 'relative' }}>
            <img src={c.imgUrl} alt="character art" style={styles.avatar} />
            <div style={styles.details}>
              <span style={{ ...styles.name, backgroundColor: c.color }}>
                {c.name}
              </span>
              <div
                style={{
                  ...styles.classDetails,
                  color: c.color,
                  borderColor: c.color,
                }}
              >
                <span style={{ marginRight: 20 }}>LEVEL {c.lvl}</span>
                <span>{c.class}</span>
              </div>
            </div>
          </div>

          <div>
            {/* HP {c.hp}
            AC {c.ac} */}
            <table style={{ ...styles.table, backgroundColor: c.color }}>
              <tr>
                <td
                  style={{
                    borderRight: `4px solid ${COLORS.TRIM}`,
                  }}
                >
                  STR {c.str}
                </td>
                <td>INT {c.int}</td>
              </tr>
              <tr>
                <td
                  style={{
                    borderRight: `4px solid ${COLORS.TRIM}`,
                  }}
                >
                  DEX {c.dex}
                </td>
                <td>WIS {c.wis}</td>
              </tr>
              <tr>
                <td
                  style={{
                    borderRight: `4px solid ${COLORS.TRIM}`,
                  }}
                >
                  CON {c.con}
                </td>
                <td>CHA {c.cha}</td>
              </tr>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
