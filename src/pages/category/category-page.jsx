import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../utils/user';

const CategoryPage = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  return (
    <div
      style={{
        margin: 20,
      }}
    >
      <h2
        style={{
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        Sjangere
      </h2>
      <div
        style={{
          marginTop: 20,
          width: '40%',
        }}
      >
        {currentUser?.genres?.map((ctg) => (
          <div
            key={`category-user-ctg-${ctg}`}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid silver',
              padding: '10px 5px',
            }}
            onClick={() => navigate(`/category/${ctg?.name}`)}
          >
            <span
              style={{
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              {ctg?.name}
            </span>
            {ctg?.isLike ? (
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                <FaStar color="#d5d552" /> Favorittsjanger
              </span>
            ) : (
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                <CiStar />
                Legg til i favoriteliste
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
