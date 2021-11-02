import HeadImg from './HeadImg';
import { data } from '../../db/BoardList';
import './Board.scss';
import bg from '../../images/board-bg.jpeg';

export default function Board() {
  let headings = Object.keys(data[1]);

  return (
    <>
      <HeadImg title={'게시판'} bg={bg} />
      <div className="title">
        <h1>게시판</h1>
      </div>
      <div className="container">
        <div className="board-box">
          <table className="table">
            <thead>
              <tr>
                {headings.map((heading) => (
                  <th>{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((el) => (
                <tr key={el.번호}>
                  {headings.map((heading) => (
                    <td>
                      <span>{el[heading]}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
