<section id="schedule" class="schedule">
    <div class="container container-full">
        <div class="column-8 offset-2">
            <h2>Class Schedule</h2>
            <hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente excepturi, eligendi obcaecati corporis. Earum minus et, deleniti culpa sed excepturi beatae facere.</p>
            <div class="container container-full classes">
                <?php 
                    $content = json_decode(file_get_contents('schedule.json'));

                    foreach ($content as $day) {
                        echo '<figure class="column-3">';
                            echo '<h4>'; print_r($day->day); echo '</h4>';
                            echo '<h6>'; print_r($day->class1); echo '</h6>';
                            echo '<p><strong>'; print_r($day->time1); echo '</strong></p>';
                            echo '<h6>'; print_r($day->class2); echo '</h6>';
                            echo '<p><strong>'; print_r($day->time2); echo '</strong></p>';
                        echo '</figure>';
                    }
                 ?>
             </div>
        </div>
    </div>
</section>
