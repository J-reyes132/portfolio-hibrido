<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\NavItem;
use App\Models\SocialLink;
use App\Models\Skill;
use App\Models\Project;
use App\Models\Experience;
use App\Models\Education;
use App\Models\Philosophy;
use App\Models\PersonalItem;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Nav Items
        NavItem::insert([
            ['href' => '/', 'label' => 'Work', 'order' => 1],
            ['href' => '/about', 'label' => 'About', 'order' => 2],
            ['href' => '/skills', 'label' => 'Skills', 'order' => 3],
            ['href' => '/experience', 'label' => 'Experience', 'order' => 4],
            ['href' => '/architecture', 'label' => 'Architecture', 'order' => 5],
            ['href' => '/contact', 'label' => 'Contact', 'order' => 6],
        ]);

        // Social Links
        SocialLink::insert([
            ['name' => 'LinkedIn', 'url' => 'https://www.linkedin.com/in/juanmreyesf/', 'order' => 1],
            ['name' => 'GitHub', 'url' => 'https://github.com/juanmreyesf', 'order' => 2],
            ['name' => 'Email', 'url' => 'mailto:juanreyes1321@outlook.com', 'order' => 3],
        ]);

        // Skills - Programming
        $programmingSkills = ['JavaScript', 'TypeScript', 'PHP', 'C++', 'X++', 'Python', 'Go'];
        foreach ($programmingSkills as $index => $skill) {
            Skill::create([
                'name' => $skill,
                'icon' => $this->getIconForSkill($skill),
                'category' => 'programming',
                'order' => $index + 1,
            ]);
        }

        // Core Competencies
        $competencies = ['Backend System Design', 'API Development', 'Performance Optimization', 'Agile Development', 'Debugging'];
        foreach ($competencies as $index => $comp) {
            Skill::create([
                'name' => $comp,
                'icon' => 'verified',
                'category' => 'competency',
                'order' => $index + 1,
            ]);
        }

        // Backend & DevOps
        $backendSkills = ['Node.js / NestJS', 'Laravel', 'Docker', 'CI/CD', 'GitHub Actions', 'FastAPI'];
        foreach ($backendSkills as $index => $skill) {
            Skill::create([
                'name' => $skill,
                'icon' => 'dns',
                'category' => 'backend',
                'order' => $index + 1,
            ]);
        }

        // Databases
        $databases = ['SQL Server', 'MySQL', 'Oracle', 'PostgreSQL', 'Redis', 'MongoDB'];
        foreach ($databases as $index => $db) {
            Skill::create([
                'name' => $db,
                'icon' => 'database',
                'category' => 'database',
                'order' => $index + 1,
            ]);
        }

        // Engineering
        $engineering = ['OOP', 'Design Patterns', 'Clean Code', 'SOLID Principles', 'DDD', 'TDD'];
        foreach ($engineering as $index => $eng) {
            Skill::create([
                'name' => $eng,
                'icon' => 'architecture',
                'category' => 'engineering',
                'order' => $index + 1,
            ]);
        }

        // Projects
        Project::create([
            'title' => 'Enterprise Microservices',
            'description' => 'Architected and implemented a high-availability microservices ecosystem for government infrastructure. Focused on data integrity, security, and sub-second response times.',
            'image_url' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuClG2EyXBa_raEujeXBGq1D55Q8IPpbp0tfYn6sjRiE6Y0qWaGHojmJ-Uf6e2q37sujHB7C5TCspUFZ0c9mVO4-GLIsxJlzWWq5_A3M4On6BOCnSFr_kdBpG5eMbu3k_cMAa-QAfxjyw6A6tU_qg9MvXn0m4StuxY8ALKkpMP5DWDwj-aN_dTvbsebyz2xEFv4dsuUTyqRtxB_QSr8lI_mrZLEIYAedsXLYeNH44SXWpcGu0smcpBkicxyl2xpeCsFlMWtzscKOfvg6',
            'technologies' => ['NestJS', 'Laravel', 'Docker', 'Kubernetes'],
            'links' => [
                ['label' => 'Case Study', 'url' => '#'],
                ['label' => 'GitHub', 'url' => '#']
            ],
            'order' => 1,
        ]);

        Project::create([
            'title' => 'API Gateway Engine',
            'description' => 'Developed a custom API gateway using NestJS and TypeScript to manage authentication, rate limiting, and request routing across multiple legacy and modern systems.',
            'image_url' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjZBr85UMHgvkTIA9Pe21iBFycCepCjFg60WX3elvAM6br0DkhGHuV5-Czv-1uPDAp3ofCpfjwIVCUHDYqnsrofJxo3gFHGOGEuUlQhDNoG8zSGwGLvJgon74_eOJdYcIb07VbIR_bye31RAbTt5Ys9PT10Bs05M3bOoGKVnLja8vk4JVHipes6RWitXrMOAYn7gHVB_7fRyUGwynwJ14k2Kx6c8-9q-XEylVyGUgIPh70FadirDAKz-lF3My608-aFwq993slEHIw',
            'technologies' => ['NestJS', 'TypeScript', 'Redis', 'JWT'],
            'links' => [
                ['label' => 'Live Demo', 'url' => '#'],
                ['label' => 'GitHub', 'url' => '#']
            ],
            'order' => 2,
        ]);

        // Experiences
        Experience::create([
            'title' => 'Backend Team Lead',
            'company' => 'OGTIC',
            'period' => '2024 — PRESENT',
            'logo_url' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpnwc_BolE9rXlCu__m2_UrwCmdPtOrqhWRclCzGHoSWK31zSeD4uLPB5I6iPOhkTNX6qd1RXL7xXLA-hd13FCke5oQcMhspc7H3SfYqGEK58aCmHtwjD9GwA23YtSO10EDMI7PyKp4sQuQgHark4a0-zYQWFnFIax0OLVBesZh3yjmynItOWVB1wwFnYCeyRpr0VEQZTf4FYu-Hzjt4XPANNTUo9MTTyZZkoS6Y1PSlxPMAvaMqhaL5TdNQ8hWm1UgDC9n9pyMqb-',
            'description' => 'Leading backend development teams to build and maintain the foundational digital infrastructure for national-scale government services.',
            'achievements' => [
                'Designing and implementing scalable APIs and microservices using NestJS and Laravel architectures.',
                'Directing architectural design sessions and establishing rigorous clean code practices across multiple project streams.',
                'Mentoring technical teams and managing cross-functional delivery to ensure high system availability and security.'
            ],
            'technologies' => ['NestJS', 'Laravel', 'Architecture', 'Leadership'],
            'order' => 1,
        ]);

        Experience::create([
            'title' => 'Backend Developer | Systems Analyst',
            'company' => 'OGTIC',
            'period' => 'JAN 2022 — NOV 2024',
            'logo_url' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpnwc_BolE9rXlCu__m2_UrwCmdPtOrqhWRclCzGHoSWK31zSeD4uLPB5I6iPOhkTNX6qd1RXL7xXLA-hd13FCke5oQcMhspc7H3SfYqGEK58aCmHtwjD9GwA23YtSO10EDMI7PyKp4sQuQgHark4a0-zYQWFnFIax0OLVBesZh3yjmynItOWVB1wwFnYCeyRpr0VEQZTf4FYu-Hzjt4XPANNTUo9MTTyZZkoS6Y1PSlxPMAvaMqhaL5TdNQ8hWm1UgDC9n9pyMqb-',
            'description' => 'Focused on the development of high-impact RESTful APIs and robust system analysis for critical national platforms.',
            'achievements' => [
                'Architected and deployed scalable backend solutions that powered government digital transformation initiatives.',
                'Collaborated within Agile workflows to deliver iterative improvements to complex public service portals.'
            ],
            'technologies' => ['REST APIs', 'Systems Analysis', 'Agile'],
            'order' => 2,
        ]);

        Experience::create([
            'title' => 'Senior Microsoft Dynamics Developer',
            'company' => 'Sigma Petroleum',
            'period' => 'JAN 2021 — JAN 2022',
            'logo_url' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA6HPhdhZdoCJTTpixOXfBujo4-FNJYoDHZiawEkUQlg35GNDO_9KXrKZTa3_aTjaD2HZNKCGXNZoHExOo7GXg8pQkMrNn2RllEHk1Bs4sqF_YIvfM9cgpORHWqip1EzqkQ2X7zAUAxHYRBSZJhaXSXWd0bKQlgzLAE_Fh_LF38UtFKdGB83ZrlVE4_C5te5GUaWbSKG7YwVScHpjhl2LCJL4YIBLvA4Icc8PLcNff2jd86kHMnIm8WGVTjbhXNaT7jyjW2V-7sweR',
            'description' => 'Specializing in enterprise resource planning (ERP) solutions and internal system integrations for large-scale operations.',
            'achievements' => [
                'Developed and customized enterprise applications using Microsoft Dynamics AX and 365 environments.',
                'Implemented critical POS integrations and optimized SQL Server database performance for real-time transactions.'
            ],
            'technologies' => ['Dynamics 365', 'X++', 'SQL Server', 'ERP'],
            'order' => 3,
        ]);

        Experience::create([
            'title' => 'Development Consultant',
            'company' => 'Sitcorp S.R.L',
            'period' => 'MAY 2020 — JAN 2021',
            'logo_url' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFbiZxVkiVuYIZaGwvg8egFFHuFZN56ZAT3ShTiI8YddouVF62CTEoUeFgTOAO9Aj46uvbSFu44UXlCzn7PwsbFqB2gmgwvd0qM-hVVpUAB34KvqD751QRdVesszBvrlJx9q2gqugwPIxrEaEA6yT2418sw7F19BqJ2twQ9h_wJBniuCNAdtELuw6WozSIZnTbS1i0wf7WEgDrJZUeYnA1Nf4yGa71Ioe_wrzY81l1r5ApvrbYAjUjGqF4frye1ZmSW7qV-tk2hHa-',
            'description' => 'Providing custom backend consultancy and engineering services for retail sector clients seeking operational efficiency.',
            'achievements' => [
                'Delivered bespoke backend solutions tailored to retail management and inventory tracking.',
                'Architected workflow automation tools that significantly reduced manual processing time for core business operations.'
            ],
            'technologies' => ['Backend Dev', 'Automation', 'Consultancy'],
            'order' => 4,
        ]);

        // Education
        Education::insert([
            [
                'number' => '01',
                'title' => 'UNIBE',
                'subtitle' => 'Bachelor of Engineering in ICT (In Progress)',
                'description' => '2023 - Present. Pursuing advanced knowledge in Information and Communication Technologies.',
                'order' => 1,
            ],
            [
                'number' => '02',
                'title' => 'ITLA',
                'subtitle' => 'Software Development Technology Degree',
                'description' => 'Completed in October 2020. Specialized in modern software engineering principles and practices.',
                'order' => 2,
            ],
            [
                'number' => '03',
                'title' => 'AWS Essentials',
                'subtitle' => 'Certification',
                'description' => 'Proficiency in core Amazon Web Services infrastructure and cloud computing basics.',
                'order' => 3,
            ],
        ]);

        // Philosophy
        Philosophy::insert([
            [
                'title' => 'Scalability First',
                'description' => 'I build systems that don\'t just work for today, but scale for tomorrow. Architecture is about anticipating growth while maintaining performance.',
                'icon' => 'hub',
                'variant' => 'default',
                'order' => 1,
            ],
            [
                'title' => 'Code Precision',
                'description' => 'Clean, maintainable, and efficient code is non-negotiable. I believe in radical simplicity in the backend to ensure stability in the frontend.',
                'icon' => 'precision_manufacturing',
                'variant' => 'highlight',
                'order' => 2,
            ],
            [
                'title' => 'Resilient APIs',
                'description' => 'Designing interfaces that are robust, secure, and intuitive for other developers to consume. The API is the bridge of the digital world.',
                'icon' => 'security',
                'variant' => 'light',
                'order' => 3,
            ],
            [
                'title' => 'The Human Connection',
                'description' => 'Beyond the logic and data points, I engineer for the people who use the software. Every microservice is a part of a larger human experience.',
                'icon' => 'handshake',
                'variant' => 'default',
                'order' => 4,
            ],
        ]);

        // Personal Items
        PersonalItem::insert([
            [
                'image_url' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpTNtWbMXUnloOY807l7wKby14xoCJK7abiMM0uE00EG7SXeZbgoP09D1p-JIHoauMJNAniBKF6vc9O51mh1NP1uWP5_GRf5Am93qYuYEMTlu-PTYJTCEzUEYdhc0jOv1dNDfEbqGa3OIVXxLywEqzuS0KvtOl9g7tZkSYSorP1cIAwIa_DA8LM88ngkJ3jFoEtqYP5DjFiUMoxIJUNPHFSPAxqTxAlMmhIVv8UugfOLI0IRZtBF7_3F_L546AhaXhGZt3h99zo6JG',
                'label' => 'Velo Therapy',
                'order' => 1,
            ],
            [
                'image_url' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdxC2FJWoQYBKiF0CJBIZA3iT9_wekVUpoPcxfnjo4Lg3NrC9MH1gHyT1mZawwsNeb3KswkZanEzECZdp4O54cZIqCQb9HIo6-cSDaYT5P8jYQNDA-yMI7Wd83YLlULYXHVsQXLVPQKXn5F004UGR1B-LwATqNPELwF4GgJlOWDnWfnbM2eQALGVr2WMxZrLe2KQ3GVG4eWSFYwCaUxJExW64p1SK7itF2tr_QBa-vfwMpkJJ-iCqW9oAsv7Jw0ehK8Z67nFM7vP4k',
                'label' => 'Brew Rituals',
                'order' => 2,
            ],
            [
                'image_url' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX3Qx46tsmFoEXZ3W9QIS3khMDCaANZ-KZ7rMxxPwk2tCkxdrfhkLKs69f2IE_3If-vbfii-_qBlZu3jfkoMIoA_IZc5xBuUoDkxtNaqEwqIUT6qJUMEvUqlgU2XRiMfGpYt2xk9OdQZqzJEwJQyaxxZ6JgzlDzz5CtY2D-5-FMy-EsAt8pyG5AjNgKKJJgK-nJF4UtykAn8H5NdpwZAaJLbuY0HoCZUs6C19meKt0aTkUdQVJNKvjA2udUi0DrEhO1NYL-m6D-tga',
                'label' => '35mm Frames',
                'order' => 3,
            ],
            [
                'image_url' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL4kXeB7CVnaBk9CduyPxefFNJLWrflkR_3ejtyuCBVHm69PqVbZD3aHwX4ERxvln0Uo0BGeDGRw9HoCEr2AKL-p04wpHjabAfJBx_b56Ha9Hi5fWIZdbAoAHC039F7Nq72PzM5-lQ6QVJeX3f9-SGrn57HAedDkergNJV7rI2a6ZX7bNjgWK2JQKu1zMUM8ONZiJ6CQcArjTeBzJFciVPIkr63NHrIDtKZICvYI623ATnJXl_dX2WZRTDnfr6zWHXNRRTNkEe8cuU',
                'label' => 'Curated Ink',
                'order' => 4,
            ],
        ]);
    }

    private function getIconForSkill(string $skill): string
    {
        return match ($skill) {
            'JavaScript', 'TypeScript', 'Python', 'Go' => 'code',
            'PHP' => 'code_blocks',
            'C++', 'X++' => 'data_object',
            default => 'terminal',
        };
    }
}
