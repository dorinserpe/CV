import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Certificate</th>
								<th>Date</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Highschool Diploma</td>
								<td>June 2018</td>
								<td></td>
							</tr>
							<tr>
								<td>Bachelor's Degree</td>
								<td>September 2018 - June 2022</td>
								<td>

								</td>
							</tr>
							<tr>
								<td>CCNA Routing&Switching (First and second module)</td>
								<td>May 2021</td>
								<td>

								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
