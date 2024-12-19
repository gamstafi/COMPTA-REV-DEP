import React from 'react';

    function Filters() {
      return (
        <div>
          <h2>Filtres</h2>
          <input type="date" placeholder="Date" />
          <select>
            <option value="all">Tous</option>
            <option value="revenue">Revenu</option>
            <option value="expense">Dépense</option>
          </select>
          <select>
            <option value="all">Toutes les catégories</option>
            <option value="salaries">Salaires</option>
            <option value="alimentation">Alimentation</option>
            <option value="loisirs">LOISIRS</option>
          </select>
        </div>
      );
    }

    export default Filters;
