import React from 'react';
import './App.css';

const COLORS = {
  BACKGROUND: 'tan',
  TRIM: 'black', //#36454F
};

function App() {
  const data = [
    {
      name: 'YAMATO',
      lvl: 15,
      class: 'BARBARIAN',
      imgUrl:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db98f511-eef6-46d8-8146-fb35b0665549/df60wi4-a79be578-9083-4a65-b19e-355f2538d201.jpg/v1/fill/w_844,h_947,q_70,strp/yamato__one_piece__by_nateart25_df60wi4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2RiOThmNTExLWVlZjYtNDZkOC04MTQ2LWZiMzViMDY2NTU0OVwvZGY2MHdpNC1hNzliZTU3OC05MDgzLTRhNjUtYjE5ZS0zNTVmMjUzOGQyMDEuanBnIiwid2lkdGgiOiI8PTk2MyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.xL8wJ2sB6DvWCqe2OObWttp8uis6K2YZTMjZla0sc7o',
      backgroundUrl: 'https://i.imgur.com/pWmF18N.jpg',
      ac: 21,
      hp: 99,
      str: 20,
      dex: 15,
      con: 20,
      int: 8,
      wis: 12,
      cha: 14,
      color: 'blue',
    },
    {
      name: 'Gray',
      lvl: 10,
      class: 'WARLOCK',
      imgUrl: 'https://i.imgur.com/rPUefPK.jpg',
      backgroundUrl: 'https://i.imgur.com/Bkr1JwW.jpg',
      ac: 17,
      hp: 93,
      str: 10,
      dex: 14,
      con: 14,
      int: 10,
      wis: 12,
      cha: 20,
      color: '#56b7aa',
    },
    {
      name: 'K',
      lvl: 10,
      class: 'SORCERER',
      imgUrl: 'https://i.imgur.com/jfC9Qep.jpg',
      backgroundUrl: 'https://i.imgur.com/iEPeh6M.jpg',
      ac: 15,
      hp: 62,
      str: 8,
      dex: 12,
      con: 14,
      int: 10,
      wis: 16,
      cha: 20,
      color: '#882EEC',
    },
    {
      name: 'Casey',
      lvl: 10,
      class: 'BARD',
      imgUrl: 'https://i.imgur.com/C4Q3Vac.jpg',
      backgroundUrl: 'https://i.imgur.com/mrxPCuX.jpg',
      ac: 13,
      hp: 63,
      str: 10,
      dex: 16,
      con: 12,
      int: 9,
      wis: 12,
      cha: 20,
      color: 'pink',
    },
    {
      name: 'Nef',
      lvl: 10,
      class: 'BARBARIAN',
      imgUrl: 'https://i.imgur.com/aHHdqGH.png',
      backgroundUrl: 'https://i.imgur.com/Bkr1JwW.jpg',
      ac: 19,
      hp: 105,
      str: 18,
      dex: 14,
      con: 16,
      int: 10,
      wis: 12,
      cha: 12,
      color: '#81b8c7',
    },
    {
      name: 'Illias',
      lvl: 10,
      class: 'ARTIFICER',
      imgUrl: 'https://i.imgur.com/7FH2h12.png',
      backgroundUrl: 'https://i.imgur.com/crLcAWo.jpg',
      ac: 16,
      hp: 66,
      str: 10,
      dex: 14,
      con: 14,
      int: 21,
      wis: 9,
      cha: 12,
      color: '#ea9a67',
    },
    {
      name: 'Fio',
      lvl: 10,
      class: 'PALADIN',
      imgUrl: 'https://i.imgur.com/oB35mpi.jpg',
      backgroundUrl: 'https://i.imgur.com/BvtUCMb.jpg',
      ac: 18,
      hp: 84,
      str: 15,
      dex: 8,
      con: 14,
      int: 8,
      wis: 12,
      cha: 20,
      color: '#de253b',
    },
    {
      name: 'Belarus',
      lvl: 10,
      class: 'ARTIFICER',
      imgUrl: 'https://i.imgur.com/7FH2h12.png',
      backgroundUrl: 'https://i.imgur.com/crLcAWo.jpg',
      ac: 16,
      hp: 66,
      str: 10,
      dex: 14,
      con: 14,
      int: 21,
      wis: 9,
      cha: 12,
      color: 'darkgray',
    },
  ];

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
